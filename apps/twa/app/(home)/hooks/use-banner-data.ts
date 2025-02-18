"use client";

import { useQuery } from "@tanstack/react-query";
import { Vault } from "../../../types/vault";

export const useBannerData = () => {
  return useQuery<Vault>({
    queryKey: ["banner-data"],
    queryFn: () => {
      // mock data
      return {
        id: "1",
        type: "super-savings",
        name: "Super Savings",
        provider: "SuperState",
        description: "Save money and earn rewards",
        apy: 0.056,
        userCount: 1000,
      };
    },
  });
};
