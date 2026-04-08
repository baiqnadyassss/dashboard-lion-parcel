"use client";

import { funnelStages, conversionRates } from "@/lib/data";

export default function FunnelChart() {
  const maxValue = funnelStages[0].value;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Pipeline Funnel
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Lead to Closed Won conversion flow
          </p>
        </div>
        <span className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full">
          Overall: {((53 / 7516) * 100).toFixed(2)}% conversion
        </span>
      </div>

      {/* Funnel bars */}
      <div className="space-y-3">
        {funnelStages.map((stage, i) => {
          const widthPercent = Math.max(
            (stage.value / maxValue) * 100,
            8
          );
          return (
            <div key={stage.name} className="group">
              <div className="flex items-center gap-4">
                <div className="w-44 shrink-0 text-right">
                  <span className="text-sm font-medium text-gray-700">
                    {stage.name}
                  </span>
                </div>
                <div className="flex-1 relative">
                  <div className="h-11 bg-gray-50 rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg flex items-center justify-end pr-4 transition-all duration-700 ease-out"
                      style={{
                        width: `${widthPercent}%`,
                        backgroundColor: stage.color,
                        minWidth: "80px",
                      }}
                    >
                      <span className="text-sm font-bold text-white drop-shadow-sm">
                        {stage.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Conversion arrow */}
              {i < funnelStages.length - 1 && conversionRates[i] && (
                <div className="flex items-center gap-4 my-1">
                  <div className="w-44" />
                  <div className="flex items-center gap-2 pl-2">
                    <svg
                      className="w-3 h-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    <span className="text-xs font-medium text-gray-400">
                      {conversionRates[i].rate}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Conversion rate cards */}
      <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-100">
        {conversionRates.map((cr) => (
          <div
            key={cr.from}
            className="text-center p-3 rounded-xl bg-gray-50"
          >
            <p className="text-xs text-gray-500 mb-1">{cr.from}</p>
            <p className="text-lg font-bold text-gray-800">{cr.rate}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
