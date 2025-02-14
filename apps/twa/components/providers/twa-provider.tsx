"use client";

import { init } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { tonconnectManifest } from "../../configs/tonconnect-manifest";
import { TonConnectUIProvider } from "@repo/ton-connect-ui-react";

export default function TWAProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      init();

      console.log("init");
    }
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={tonconnectManifest.url}>
      {children}
    </TonConnectUIProvider>
  );
}
