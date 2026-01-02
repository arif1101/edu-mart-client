import CartClient from "@/components/cart/CartClient";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <CartClient />
    </div>
  );
}


