"use client";

import { useQuery } from "@tanstack/react-query";
import { Vault } from "../../../../types/vault";
import { mockVaults } from "../../../../configs/mock-vaults";

export const useFeaturedProducts = () => {
  return useQuery<Vault[]>({
    queryKey: ["featured-products"],
    queryFn: () => {
      // mock data
      return mockVaults;
    },
  });
};
