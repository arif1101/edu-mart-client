"use server";

import { getAuthUser } from "./auth";
import { Cart } from "@/models/cart"; // your mongoose model

export async function getUserCart() {
  const user = await getAuthUser();
  if (!user) return [];

  return Cart.find({ userId: user._id, paid: false }).populate("course");
}

export async function getCartTotal() {
  const cart = await getUserCart();
  return cart.reduce((sum, item) => sum + item.course.price, 0);
}
