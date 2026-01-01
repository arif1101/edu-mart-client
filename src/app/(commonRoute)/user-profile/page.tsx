import { getAuthUser } from "@/app/_action/auth";
import Profile from "@/components/page/user/Profile";

export default async function UserProfilePage() {

    const user = await getAuthUser()
    
  return (
    <div className="container mx-auto">
      <Profile user={user}/>
    </div>
  )
}
