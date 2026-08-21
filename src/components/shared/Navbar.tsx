import { mockUser } from "@/data/mockData";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return <NavbarClient user={mockUser} />;
}
