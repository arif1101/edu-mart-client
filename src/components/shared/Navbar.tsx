import { unstable_noStore as noStore } from "next/cache";
import { getAuthUser } from "@/app/_action/auth";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  noStore();
  const user = await getAuthUser();

  return <NavbarClient user={user} />;
}
