import { getShop, Discount } from "@/lib/get-shop";
import DiscountCard from "../components/DiscountCard";
import { notFound } from "next/navigation";

function sortDiscounts(discounts: Discount[]) {
  return discounts.sort((a, b) => b.popularity - a.popularity);
}

export default async function ShopPage() {
  const shopData = await getShop();

  if (!shopData) return notFound();

  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">
          {shopData.shopName} Discount Codes
        </h1>
        <p className="text-gray-700 mt-2">{shopData.shopDescription}</p>
      </header>

      <section className="grid gap-4 grid-cols-1">
        {sortDiscounts(shopData.discounts).map((discount, index) => (
          <DiscountCard
            key={index}
            shopLink={shopData.shopLink}
            {...discount}
          />
        ))}
      </section>
    </>
  );
}
