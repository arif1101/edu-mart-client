import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="py-32 text-center space-y-5">
      <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <ShoppingBag className="text-gray-400" />
      </div>

      <h2 className="text-2xl font-semibold">
        Your cart is empty
      </h2>

      <p className="text-gray-500 max-w-sm mx-auto">
        You haven’t added any courses yet. Start learning something new today.
      </p>

      <Link href="/courses">
        <Button className="bg-sky-500 hover:bg-sky-600 px-8">
          Browse Courses
        </Button>
      </Link>
    </div>
  );
}
