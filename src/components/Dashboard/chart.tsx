'use client'
import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const ChartComponent = () => {
    const chartData = [
        { SalesPerson: "Person1", before: 186, after: 80 },
        { SalesPerson: "Person2", before: 305, after: 200 },
        { SalesPerson: "Person3", before: 237, after: 120 },
        { SalesPerson: "Person4", before: 73, after: 190 },
        { SalesPerson: "Person5", before: 209, after: 130 },
        { SalesPerson: "Person6", before: 214, after: 140 },
    ];


    const chartConfig = {
        before: {
            label: "Before",
            color: "#006efa",
        },
        after: {
            label: "After",
            color: "#fdb022",
        },
    } satisfies ChartConfig
    return (
        <ChartContainer config={chartConfig} className="min-h-[400px] min-w-[200px] w-full">
            <BarChart accessibilityLayer data={chartData} layout="vertical">
                <CartesianGrid horizontal={false} />
                <XAxis
                    type="number"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <YAxis
                    type="category"
                    dataKey="SalesPerson"
                    tickFormatter={(value) => value.slice(0, 10)}
                />
                <ChartTooltip content={<ChartTooltipContent />} wrapperStyle={{ backgroundColor: '#000', borderRadius: '10px' }} />
                <ChartLegend content={<ChartLegendContent />} style={{ color: "#64748b" }} />
                <Bar dataKey="before" fill="var(--color-before)" radius={4} />
                <Bar dataKey="after" fill="var(--color-after)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}

export default ChartComponent