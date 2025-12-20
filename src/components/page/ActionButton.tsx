"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

interface ActionButtonProps {
  children: React.ReactNode;
}

export default function ActionButton({ children }: ActionButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="w-full"
    >
      {pending ? "Loading..." : children}
    </Button>
  );
}