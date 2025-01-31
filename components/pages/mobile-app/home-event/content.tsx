import {
  CalendarDays,
  MapPin,
  Clock,
  Share2,
  Users,
  Image,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-red-50 to-purple-100 p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto">
      <DashboardCard
        icon={CalendarDays}
        title="Event Details"
        content="Date, time, and venue map"
      />
      <DashboardCard
        icon={Clock}
        title="Itinerary"
        content="Create event schedule"
      />
      <DashboardCard
        icon={Share2}
        title="Bulk Invites"
        content="Send invites via shareable link"
      />
      <DashboardCard
        icon={Users}
        title="Invite Tracking"
        content="Track who has received invites"
      />
      <DashboardCard
        icon={Image}
        title="Photo Repository"
        content="Upload & share event photos"
      />
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
