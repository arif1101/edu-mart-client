import UserDashboard from "@/components/page/dashboard/UserDashboard";
import { mockUser, mockEnrollments } from "@/data/mockData";

export default function DashboardPage() {
  return <UserDashboard user={mockUser} enrollments={mockEnrollments} />;
}
