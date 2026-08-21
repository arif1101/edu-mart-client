"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white rounded-[6px] px-3 py-1.5 cursor-pointer">
      Logout
    </button>
  );
}
