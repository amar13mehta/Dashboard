import { ChevronRight } from "lucide-react";

type TEventItemProps = {
  time: string;
  title: string;
  description: string;
  color: "blue" | "yellow" | "green";
};

export function EventItem({
  time,
  title,
  description,
  color,
}: TEventItemProps) {
  const colors = {
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
  } as const;

  return (
    <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
      <div className={`w-2 h-2 rounded-full ${colors[color]} mt-2 shrink-0`} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-900">{time}</span>
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}
