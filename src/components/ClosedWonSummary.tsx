"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { closedWonStats, meetingResults, closedWonByKota } from "@/lib/data";

const RESULT_COLORS = meetingResults.map((r) => r.color);

export default function ClosedWonSummary() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-8 bg-emerald-500 rounded-full" />
        <h2 className="text-xl font-bold text-gray-900">
          Closed Won: Summary
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-8 ml-5">
        <span className="font-semibold text-gray-800">
          {closedWonStats.totalHotels} hotels acquired
        </span>{" "}
        with {closedWonStats.totalRooms.toLocaleString()} total rooms
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Meeting Results Donut */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Meeting Results Breakdown
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={meetingResults}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="count"
                  nameKey="status"
                >
                  {meetingResults.map((entry, i) => (
                    <Cell key={i} fill={RESULT_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Branding & Stats */}
        <div className="space-y-6">
          <h3 className="text-base font-semibold text-gray-800">
            Acquisition Stats
          </h3>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100">
              <p className="text-xs font-medium text-emerald-600 mb-1">
                Total Hotels
              </p>
              <p className="text-2xl font-bold text-emerald-800">
                {closedWonStats.totalHotels}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <p className="text-xs font-medium text-blue-600 mb-1">
                Total Rooms
              </p>
              <p className="text-2xl font-bold text-blue-800">
                {closedWonStats.totalRooms.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Win Rate */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-amber-700">
                Win Rate (from Meetings)
              </p>
              <p className="text-lg font-bold text-amber-800">52.48%</p>
            </div>
            <div className="w-full bg-amber-200/50 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-amber-400 to-orange-500 h-2.5 rounded-full"
                style={{ width: "52.48%" }}
              />
            </div>
            <p className="text-xs text-amber-600 mt-1.5">
              53 won out of 101 meetings booked
            </p>
          </div>

          {/* Branding Equipment */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Branding Delivered
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-gray-800">
                  {closedWonStats.brandingAkrilik}
                </p>
                <p className="text-xs text-gray-500 mt-1">Akrilik</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-gray-800">
                  {closedWonStats.brandingVideo}
                </p>
                <p className="text-xs text-gray-500 mt-1">Video</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-gray-800">
                  {closedWonStats.brandingBanner}
                </p>
                <p className="text-xs text-gray-500 mt-1">Banner</p>
              </div>
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Top Closed Won Cities
            </h4>
            <div className="space-y-2">
              {closedWonByKota.slice(0, 4).map((city) => (
                <div key={city.kota} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-24">
                    {city.kota}
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full transition-all"
                      style={{
                        width: `${(city.count / 17) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 w-8 text-right">
                    {city.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
