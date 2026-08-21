"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ActionButton from "../ActionButton";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Login successful!");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="p-5 space-y-4">
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required />
        <ActionButton>Login</ActionButton>
      </Card>
    </form>
  );
}