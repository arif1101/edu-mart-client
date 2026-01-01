// app/dashboard/page.tsx
import { getAuthUser } from "@/app/_action/auth";
import UserDashboard from "@/components/page/dashboard/UserDashboard";

export default async function DashboardPage() {
  const user = await getAuthUser();

  return <UserDashboard user={user} />;
}
