"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignupForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Registration successful. Please log in.");
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Full name"
        required
        className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-sky-500"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-sky-500"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-sky-500"
      />

      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition cursor-pointer"
      >
        Register
      </button>
    </form>
  );
}
