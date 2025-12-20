"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerAction } from "@/app/_action/registerAction";

export default function SignupForm() {
  const [state, formAction] = useActionState(registerAction, null);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message);
    }

    if (state.success) {
      toast.success("Registration successful. Please log in.");
      router.push("/login");
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
      <input
        name="name"
        placeholder="Full name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
