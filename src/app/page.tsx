'use client'

import MetricCard from '@/components/MetricCard'
import FunnelChart from '@/components/FunnelChart'
import MeetingsBooked from '@/components/MeetingsBooked'
import ClosedWonSummary from '@/components/ClosedWonSummary'
import { pipelineData } from '@/lib/data'

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#f8f9fb]">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                        <div className="flex flex-row sm:items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-2">
                                <div className="shrink-0 w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-base font-bold text-gray-900 leading-tight">
                                        Lion Parcel
                                    </h1>
                                </div>
                            </div>
                            <div className="sm:pl-0">
                                <h2 className="text-sm font-semibold text-gray-800">
                                    Hotel Acquisition Bali
                                </h2>
                                <p className="text-xs text-gray-400">
                                    Shadow POS Dashboard
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:pl-0">
                            <span className="text-xs font-medium text-gray-400">
                                Last updated: Apr 2026
                            </span>
                            <div className="shrink-0 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 py-8 space-y-8">
                {/* KPI Cards */}
                <section>
                    <div className="flex items-center gap-2 mb-5">
                        <h2 className="text-lg font-bold text-gray-900">
                            Pipeline Overview
                        </h2>
                        <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2.5 py-1 rounded-full">
                            Achievement
                        </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <MetricCard
                            title="Outreach"
                            value={pipelineData.totalOutreach}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            }
                            accent="bg-violet-50 text-violet-600"
                            subtitle="26.0% of leads"
                        />
                        <MetricCard
                            title="Connected"
                            value={pipelineData.connected}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg>
                            }
                            accent="bg-blue-50 text-blue-600"
                            subtitle="33.7% of outreach"
                        />
                        <MetricCard
                            title="PIC Contact"
                            value={pipelineData.picContact}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            }
                            accent="bg-sky-50 text-sky-600"
                            subtitle="12.8% of connected"
                        />
                        <MetricCard
                            title="Meetings"
                            value={pipelineData.meetingsBooked}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            }
                            accent="bg-amber-50 text-amber-600"
                            subtitle="120.2% of PIC"
                        />
                        <MetricCard
                            title="Completed"
                            value={pipelineData.meetingsCompleted}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            }
                            accent="bg-teal-50 text-teal-600"
                            subtitle="79.2% show rate"
                        />
                        <MetricCard
                            title="Closed Won"
                            value={pipelineData.closedWon}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            }
                            accent="bg-emerald-50 text-emerald-600"
                            trend={{ value: '52.5% win rate', positive: true }}
                            subtitle="66.3% of completed"
                        />
                    </div>
                </section>

                {/* Pipeline Funnel */}
                <section>
                    <FunnelChart />
                </section>

                {/* Meetings Booked Summary */}
                <section>
                    <MeetingsBooked />
                </section>

                {/* Closed Won Summary */}
                <section>
                    <ClosedWonSummary />
                </section>

                {/* Footer */}
                <footer className="text-center py-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                        Lion Parcel — Hotel Acquisition Bali (Shadow POS)
                        Dashboard
                    </p>
                </footer>
            </main>
        </div>
    )
}
