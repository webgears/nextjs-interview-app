export type Discount = {
  code: string;
  description: string;
  expiration: string | null;
  savingsScore: number;
  popularity: number;
};

export type ShopData = {
  shopName: string;
  shopDescription: string;
  shopLink: string;
  discounts: Discount[];
};

export async function getShop(): Promise<ShopData | null> {
  return {
    shopName: "Example Shop",
    shopDescription: "Find the latest discount codes for Example Shop",
    shopLink: "https://example.com",
    discounts: [
      {
        code: "WELCOME10",
        description: "Get 10% off on your first order!",
        expiration: "2024-12-31",
        savingsScore: 10,
        popularity: 1.5,
      },
      {
        code: "FREESHIP",
        description: "Enjoy free shipping on orders over $50.",
        expiration: null,
        savingsScore: 0,
        popularity: 3.2,
      },
      {
        code: "SAVE20",
        description: "Save 20% on select items.",
        expiration: "2024-11-30",
        savingsScore: 20,
        popularity: 2.7,
      },
    ],
  };
}
