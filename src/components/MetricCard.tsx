"use client";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: { value: string; positive: boolean };
  accent?: string;
}

export default function MetricCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  accent = "bg-primary/10 text-primary",
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${accent}`}
        >
          {icon}
        </div>
        {trend && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              trend.positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            }`}
          >
            {trend.positive ? "↑" : "↓"} {trend.value}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-900 tracking-tight">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
      {subtitle && (
        <p className="text-xs text-gray-400 mt-1.5">{subtitle}</p>
      )}
    </div>
  );
}
