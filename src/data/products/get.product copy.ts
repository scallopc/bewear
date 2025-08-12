import "server-only";

import { db } from "@/db";

interface ProductsDto {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
}

export const getProducts = async (): Promise<ProductsDto[]> => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  return products;
};
