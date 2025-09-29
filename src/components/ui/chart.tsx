"use client"

import * as React from "react"
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  type TooltipProps,
} from "recharts"
import type { LegendProps as RechartsLegendProps } from "recharts"
import { cn } from "./utils"

/** Format: { THEME_NAME: CSS_SELECTOR } */
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = { config: ChartConfig }
const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error("useChart must be used within a <ChartContainer />")
  return ctx
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ReactElement
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${(id || uniqueId).toString().replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot='chart'
        data-chart={chartId}
        className={cn(
          // Tailwind fixes: use outline-none (not outline-hidden), arbitrary values with var()
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-radial-bar-background-sector]:fill-muted",
          "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
          "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-layer]:outline-none",
          "[&_.recharts-sector]:outline-none",
          "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-surface]:outline-none",
          "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}>
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, c]) => c.theme || c.color)
  if (!colorConfig.length) return null

  const css = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const lines = colorConfig
        .map(([key, item]) => {
          const color =
            (item as any).theme?.[theme as keyof typeof THEMES] ?? (item as any).color
          return color ? `  --color-${key}: ${color};` : null
        })
        .filter(Boolean)
        .join("\n")

      return `${prefix} [data-chart=${id}] {\n${lines}\n}`
    })
    .join("\n")

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

/** Re-exports for convenience */
const ChartTooltip = RechartsTooltip
const ChartLegend = RechartsLegend

type ChartTooltipContentProps = Omit<TooltipProps<number, string>, "content"> &
  React.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
    payload: any
    label: any
  }

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  ...divProps
}: ChartTooltipContentProps): React.ReactElement | null {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) return null
    const [item] = payload
    const key = `${labelKey || (item?.dataKey as string) || item?.name || "value"}`
    const itemCfg = getPayloadConfigFromPayload(config, item as any, key)

    const derived =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemCfg?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(derived, payload!)}
        </div>
      )
    }
    if (!derived) return null
    return <div className={cn("font-medium", labelClassName)}>{derived}</div>
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

  if (!active || !payload?.length) return null

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        "border-border/50 bg-background",
        className
      )}
      {...divProps}>
      {!nestLabel ? tooltipLabel : null}
      <div className='grid gap-1.5'>
        {payload.map((it: any, index: any) => {
          const item = it as any
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemCfg = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor: string | undefined =
            color || item?.payload?.fill || item?.color

          return (
            <div
              key={(item.dataKey as string) ?? index}
              className={cn(
                "flex w-full flex-wrap items-stretch gap-2",
                "[&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              )}>
              {formatter && item?.value !== undefined && item?.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemCfg?.icon ? (
                    <itemCfg.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn({
                          "h-2.5 w-2.5 shrink-0 rounded-[2px]": indicator === "dot",
                          "w-1 shrink-0 rounded-[2px]": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent":
                            indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed",
                        })}
                        style={
                          {
                            // Tailwind arbitrary values with CSS var()
                            backgroundColor:
                              indicator === "dashed" ? "transparent" : indicatorColor,
                            borderColor: indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}>
                    <div className='grid gap-1.5'>
                      {nestLabel ? tooltipLabel : null}
                      <span className='text-muted-foreground'>
                        {itemCfg?.label ?? item.name}
                      </span>
                    </div>
                    {item.value !== undefined && item.value !== null && (
                      <span className='font-mono font-medium tabular-nums text-foreground'>
                        {typeof item.value === "number"
                          ? item.value.toLocaleString()
                          : String(item.value)}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

type ChartLegendContentProps = React.HTMLAttributes<HTMLDivElement> & {
  payload?: RechartsLegendProps[]
  verticalAlign?: RechartsLegendProps["verticalAlign"]
  hideIcon?: boolean
  nameKey?: string
}

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
  ...divProps
}: ChartLegendContentProps) {
  const { config } = useChart()
  if (!payload?.length) return null

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
      {...divProps}>
      {payload.map((item: any, i: number) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemCfg = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={(item.value as string) ?? i}
            className={cn(
              "flex items-center gap-1.5",
              "[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            )}>
            {itemCfg?.icon && !hideIcon ? (
              <itemCfg.icon />
            ) : (
              <div
                className='h-2 w-2 shrink-0 rounded-[2px]'
                style={{ backgroundColor: item.color as string }}
              />
            )}
            {itemCfg?.label ?? item.value}
          </div>
        )
      })}
    </div>
  )
}

/** Helper to extract item config from a payload. */
function getPayloadConfigFromPayload(config: ChartConfig, payload: any, key: string) {
  if (typeof payload !== "object" || payload === null) return undefined

  const inner =
    typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key
  if (typeof payload[key] === "string") {
    configLabelKey = payload[key]
  } else if (inner && typeof inner[key] === "string") {
    configLabelKey = inner[key]
  }

  return configLabelKey in config ? config[configLabelKey] : (config as any)[key]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
