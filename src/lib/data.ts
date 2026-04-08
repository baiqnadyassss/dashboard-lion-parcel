// Pipeline funnel data extracted from Shadow POS - Outreach sheet
export const pipelineData = {
  totalLeads: 7516,
  totalOutreach: 1954,
  connected: 658,
  picContact: 84,
  meetingsBooked: 101,
  meetingsCompleted: 100,
  closedWon: 53,
  closedLost: 200,
};

// Funnel stages for visualization
export const funnelStages = [
  { name: "Total Leads", value: 7516, color: "#6366f1" },
  { name: "Outreach", value: 1954, color: "#8b5cf6" },
  { name: "Connected", value: 658, color: "#3b82f6" },
  { name: "PIC Contact", value: 84, color: "#0ea5e9" },
  { name: "Meetings Booked", value: 101, color: "#f59e0b" },
  { name: "Meetings Completed", value: 100, color: "#10b981" },
  { name: "Closed Won", value: 53, color: "#00b67a" },
];

// Conversion rates between stages
export const conversionRates = [
  { from: "Leads → Outreach", rate: ((1954 / 7516) * 100).toFixed(1) },
  { from: "Outreach → Connected", rate: ((658 / 1954) * 100).toFixed(1) },
  { from: "Connected → PIC Contact", rate: ((84 / 658) * 100).toFixed(1) },
  { from: "PIC → Meeting Booked", rate: ((101 / 84) * 100).toFixed(1) },
  { from: "Meeting → Completed", rate: ((100 / 101) * 100).toFixed(1) },
  { from: "Completed → Closed Won", rate: ((53 / 100) * 100).toFixed(1) },
];

// Meetings Booked by Kota (normalized from raw data, matching screenshot)
export const meetingsByKota = [
  { kota: "Badung", count: 41, percentage: "41.00%" },
  { kota: "Denpasar", count: 18, percentage: "18.00%" },
  { kota: "Gianyar", count: 18, percentage: "18.00%" },
  { kota: "Tabanan", count: 8, percentage: "8.00%" },
  { kota: "Singaraja", count: 6, percentage: "6.00%" },
  { kota: "Karangasem", count: 5, percentage: "5.00%" },
  { kota: "Klungkung", count: 2, percentage: "2.00%" },
  { kota: "Bangli", count: 2, percentage: "2.00%" },
  { kota: "Jembrana", count: 1, percentage: "1.00%" },
];

// Closed Won by Kota (from screenshot)
export const closedWonByKota = [
  { kota: "Badung", count: 17, percentage: "32.08%" },
  { kota: "Denpasar", count: 17, percentage: "32.08%" },
  { kota: "Gianyar", count: 7, percentage: "13.21%" },
  { kota: "Tabanan", count: 6, percentage: "11.32%" },
  { kota: "Singaraja", count: 2, percentage: "3.77%" },
  { kota: "Bandung", count: 3, percentage: "5.66%" },
  { kota: "Bangli", count: 1, percentage: "1.89%" },
];

// Closed Won detailed stats from CloseWon 3.0
export const closedWonStats = {
  totalHotels: 60,
  totalRooms: 1480,
  brandingAkrilik: 22,
  brandingVideo: 8,
  brandingBanner: 10,
};

// Meeting result statuses
export const meetingResults = [
  { status: "Closed Won", count: 45, color: "#00b67a" },
  { status: "Closed Won - GF", count: 8, color: "#10b981" },
  { status: "Interested", count: 4, color: "#f59e0b" },
  { status: "No Show", count: 1, color: "#ef4444" },
  { status: "Pending", count: 43, color: "#94a3b8" },
];
