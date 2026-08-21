import { mockUser } from "@/data/mockData";
import Profile from "@/components/page/user/Profile";

export default function UserProfilePage() {
  return <Profile user={mockUser} />;
}
