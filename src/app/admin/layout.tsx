// import { AdminSidebar } from "@/components/admin/admin-sidebar"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import { Separator } from "@/components/ui/separator"

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <SidebarProvider>
//       <AdminSidebar />

//       <SidebarInset>
//         <header className="flex h-16 items-center gap-2 border-b px-4">
//           <SidebarTrigger />
//           <Separator orientation="vertical" className="h-4" />
//         </header>

//         <main className="p-6">
//           {children}
//         </main>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }


import { AdminSidebar } from "@/components/admin/admin-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import { redirect } from "next/navigation"
import { getAuthUser } from "../_action/auth"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 1️⃣ Get user from cookie (SERVER)
  const user = await getAuthUser()

  // 2️⃣ Block non-admin users
  if (!user || user.role !== "ADMIN") {
    redirect("/unauthorized") // or "/login"
  }

  // 3️⃣ Render admin UI only for ADMIN
  return (
    <SidebarProvider>
      <AdminSidebar />

      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
        </header>

        <main className="p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

