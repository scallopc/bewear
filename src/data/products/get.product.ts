import { desc } from "drizzle-orm";

import { db } from "@/db";
import { productTable } from "@/db/schema";

export const getProducts = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  return products;
};

export const getNewlyCreatedProducts = async () => {
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });

  return newlyCreatedProducts;
};
