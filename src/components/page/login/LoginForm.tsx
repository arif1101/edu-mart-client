"use client";

import { loginAction } from "@/app/_action/auth";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import ActionButton from "../ActionButton";

export default function LoginFrom() {
  const [state, fromAction, isLoading] = useActionState(loginAction, null);
  const router = useRouter();

  console.log(state, )

  useEffect(() => {
    if (!state) return;

    if (!state.success ) {
      toast.error(state.message || "Login failed");
    }

    if (state.success) {
      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/");
      }, 400);
    }
  }, [state, router]);
  return (
    <form action={fromAction}>
      <Card className="p-5 space-y-4">
        <Input name="email" type="email" placeholder="Email"></Input>
        <Input name="password" type="password" placeholder="password"></Input>
        <ActionButton>Login</ActionButton>
      </Card>
    </form>
  );
}