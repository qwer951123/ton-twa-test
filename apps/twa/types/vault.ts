export type VaultType =
  | "super-savings"
  | "super-growth"
  | "remittence"
  | "insurance"
  | "micro-lending";

export type Vault = {
  id: string;
  type: VaultType;
  name: string;
  provider?: string;
  description?: string;
  apy?: number;
  userCount?: number;
};
