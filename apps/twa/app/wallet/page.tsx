"use client";

import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/sheet";

export default function WalletPage() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-full bg-primary px-4 py-2 text-white">
        打开钱包
      </SheetTrigger>
      <SheetContent>
        <div className="p-4">
          <h2 className="text-lg font-semibold">钱包详情</h2>
          {/* 钱包内容 */}
        </div>
      </SheetContent>
    </Sheet>
  );
} 