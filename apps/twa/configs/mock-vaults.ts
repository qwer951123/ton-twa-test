import { Vault } from "../types/vault";

export const mockVaults: Vault[] = [
  {
    id: "super-savings",
    type: "super-savings",
    name: "Super Savings",
    provider: "SuperState",
    description: "Save money and earn rewards",
    apy: 0.056,
    userCount: 1000,
  },
  {
    id: "super-growth",
    type: "super-growth",
    name: "Super Growth",
    provider: "Tardis Protocol",
    description: "Grow your money and earn rewards",
    apy: 0.085,
    userCount: 1000,
  },
];
