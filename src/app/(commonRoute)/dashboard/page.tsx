// app/dashboard/page.tsx
import { getAuthUser } from "@/app/_action/auth";
import UserDashboard from "@/components/page/dashboard/UserDashboard";
import { getMyEnrollments } from "@/lib/enrollment";

export default async function DashboardPage() {
  const user = await getAuthUser();
  const enrollments = await getMyEnrollments()

  console.log("---------enrollments in page--------", enrollments);

  return <UserDashboard user={user} enrollments={enrollments}/>;
}
