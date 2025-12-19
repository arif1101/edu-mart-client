"use client";

import { logoutAction } from "@/app/_action/logoutAction";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logoutAction();

    if (result.success) {
      router.push("/login");
      router.refresh(); // important: clears server cache
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 rounded-[6px] px-3 py-1.5">
      Logout
    </button>
  );
}
