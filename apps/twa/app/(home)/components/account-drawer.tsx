"use client";

import { Drawer } from "@repo/ui";
import { useModal } from "../../../hooks/use-modal";

export const AccountDrawer = () => {
  const { open, onOpenChange } = useModal("account-drawer");

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <div>
        <h1>Account Drawer</h1>
      </div>
    </Drawer>
  );
};
