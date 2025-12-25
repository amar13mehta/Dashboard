import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";

import { TStatCard } from "../types/helperFunctions";

export function StatCard({ label, value, trend }: TStatCard) {
  const data = trend.map((v, i) => ({ index: i, value: v }));

  const isPositive = trend[trend.length - 1] >= trend[0];

  const strokeColor = isPositive ? "#3B82F6" : "#EF4444";
  const dotColor = isPositive ? "#60A5FA" : "#F87171";

  return (
    <div className="bg-white rounded-xl px-6 py-4 flex items-center">
      <span className="flex flex-col gap-1 w-full">
        <h3 className=" text-lg md:text-2xl font-bold text-gray-900">
          {value}
        </h3>
        <p className=" text-xs md:text-sm text-gray-600 shrink-0">{label}</p>
      </span>

      <div className="flex items-end justify-end w-full gap-8">
        {/* Sparkline */}
        <div className="w-44 h-16 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              {/* Keep YAxis invisible but present */}
              <YAxis hide domain={["dataMin", "dataMax"]} />

              <Line
                type="monotone"
                dataKey="value"
                stroke={strokeColor}
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: dotColor,
                  stroke: "#fff",
                  strokeWidth: 1.5,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
