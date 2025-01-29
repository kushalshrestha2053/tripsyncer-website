import {
  CalendarDays,
  Users,
  Music,
  Truck,
  DollarSign,
  Share2,
  Clock,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-red-50 to-purple-100 p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto">
      <DashboardCard
        icon={CalendarDays}
        title="Schedule"
        content="Next show: Central Park, NYC"
      />
      <DashboardCard icon={Users} title="Team" content="12 members confirmed" />
      <DashboardCard
        icon={Music}
        title="Setlist"
        content="15 songs, 90 minutes"
      />
      <DashboardCard
        icon={Truck}
        title="Logistics"
        content="All equipment packed"
      />
      <DashboardCard
        icon={DollarSign}
        title="Budget"
        content="On track, 15% under"
      />
      <DashboardCard
        icon={Share2}
        title="Social Media"
        content="3 posts scheduled"
      />
      <DashboardCard icon={Clock} title="Rehearsal" content="Daily, 2-5 PM" />
    </div>
  );
}

function DashboardCard({ icon: Icon, title, content }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow">
      <div className="flex items-center mb-1">
        <Icon className="w-5 h-5 mr-2 text-blue-500" />
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      <p className="text-xs text-gray-600">{content}</p>
    </div>
  );
}
