"use client";

import { Metrics } from "./components/metrics";
import { SubpageFooter } from "../../../components/layout/subpage-footer";
import { Deposit } from "./components/deposit-button";
import { DepositSheet } from "./components/deposit-sheet";

export default function VaultPage() {
  return (
    <div>
      <Metrics />
      <DepositSheet />
      <SubpageFooter>
        <Deposit />
      </SubpageFooter>
    </div>
  );
}
