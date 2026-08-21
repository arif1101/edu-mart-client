import CartClient from "@/components/cart/CartClient";

export default function CartPage() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Shopping Cart</h1>
      <CartClient />
    </div>
  );
}


