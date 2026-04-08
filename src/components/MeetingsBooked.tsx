"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { meetingsByKota, closedWonByKota } from "@/lib/data";

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#3b82f6",
  "#0ea5e9",
  "#06b6d4",
  "#14b8a6",
  "#10b981",
  "#22c55e",
  "#84cc16",
];

export default function MeetingsBooked() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-8 bg-indigo-500 rounded-full" />
        <h2 className="text-xl font-bold text-gray-900">
          Meetings Booked: Summary
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-8 ml-5">
        <span className="font-semibold text-gray-800">
          101 total meetings booked
        </span>
        , biggest in Badung (41.00%) and Denpasar (18.00%)
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Meetings Booked Table */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Meetings Booked
          </h3>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                    Kota
                  </th>
                  <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                    Count
                  </th>
                  <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {meetingsByKota.map((row, i) => (
                  <tr
                    key={row.kota}
                    className={`border-t border-gray-50 hover:bg-gray-50/50 transition-colors ${
                      i === 0 ? "bg-indigo-50/30" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: COLORS[i] }}
                        />
                        {row.kota}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-gray-800">
                      {row.count}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500">
                      {row.percentage}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-200 bg-gray-50 font-bold">
                  <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    101
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-500" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Closed Won Table */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Closed Won
          </h3>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                    Kota
                  </th>
                  <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                    Count
                  </th>
                  <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {closedWonByKota.map((row, i) => (
                  <tr
                    key={row.kota}
                    className={`border-t border-gray-50 hover:bg-gray-50/50 transition-colors ${
                      i === 0 ? "bg-emerald-50/30" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full bg-emerald-500"
                          style={{ opacity: 1 - i * 0.1 }}
                        />
                        {row.kota}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-gray-800">
                      {row.count}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500">
                      {row.percentage}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-200 bg-gray-50 font-bold">
                  <td className="px-4 py-3 text-sm text-gray-900">Total</td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    53
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-500" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Meetings Booked vs Closed Won by Kota
        </h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={meetingsByKota.map((m) => {
                const cw = closedWonByKota.find((c) => c.kota === m.kota);
                return {
                  kota: m.kota,
                  booked: m.count,
                  won: cw?.count || 0,
                };
              })}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="kota"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="booked"
                name="Meetings Booked"
                radius={[6, 6, 0, 0]}
              >
                {meetingsByKota.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
              <Bar
                dataKey="won"
                name="Closed Won"
                fill="#00b67a"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
