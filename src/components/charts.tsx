import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { ChartsData, invoiceData } from "../types/helperFunctions";
import React, { useState } from "react";

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-lg bg-white px-4 py-2 shadow-md text-sm">
      <p className="text-gray-500 mb-1">{label}</p>
      <p className="font-semibold text-gray-900">
        ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
};

export function OrdersChart() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
        onResize={(width) => {
          setIsSmallScreen(width < 500);
        }}
      >
        <LineChart
          data={ChartsData}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF" }}
            interval={isSmallScreen ? 1 : 0} //
          />
          <YAxis hide />

          {/* Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#E5E7EB", strokeDasharray: "3 3" }}
          />

          {/* Green Line */}
          <Line
            type="monotone"
            dataKey="green"
            stroke="#22C55E"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#22C55E",
              stroke: "#BBF7D0",
              strokeWidth: 6,
            }}
          />

          {/* Blue Line */}
          <Line
            type="monotone"
            dataKey="blue"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function IncomeChart() {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={invoiceData}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            interval={0}
          />
          <YAxis hide />

          <Tooltip
            cursor={{ strokeDasharray: "5 5" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          />

          {/* Area */}
          <Area
            type="monotone"
            dataKey="value"
            fill="url(#blueGradient)"
            stroke="none"
          />

          {/* Dashed Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
