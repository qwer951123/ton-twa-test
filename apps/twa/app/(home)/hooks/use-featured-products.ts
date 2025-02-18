"use client";

import { useQuery } from "@tanstack/react-query";
import { Vault } from "../../../types/vault";

export const useFeaturedProducts = () => {
  return useQuery<Vault[]>({
    queryKey: ["featured-products"],
    queryFn: () => {
      // mock data
      return [
        {
          id: "1",
          type: "super-savings",
          name: "Super Savings",
          provider: "SuperState",
          description: "Save money and earn rewards",
          apy: 0.056,
          userCount: 1000,
        },
        {
          id: "2",
          type: "super-growth",
          name: "Super Growth",
          provider: "Tardis Protocol",
          description: "Grow your money and earn rewards",
          apy: 0.085,
          userCount: 1000,
        },
      ];
    },
  });
};
