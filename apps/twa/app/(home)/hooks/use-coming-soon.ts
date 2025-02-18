"use client";

import { useQuery } from "@tanstack/react-query";
import { Vault } from "../../../types/vault";

export const useComingSoon = () => {
  return useQuery<Vault[]>({
    queryKey: ["common-soon"],
    queryFn: () => {
      // mock data
      return [
        {
          id: "1",
          type: "remittence",
          name: "Remittence",
          provider: "Provider 1",
        },
        {
          id: "2",
          type: "micro-lending",
          name: "Micro-Lending",
          provider: "Provider 2",
        },
        {
          id: "3",
          type: "insurance",
          name: "Insurance",
          provider: "Provider 3",
        },
      ];
    },
  });
};
