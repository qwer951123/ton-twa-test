"use client";

import { init, backButton, viewport } from "@telegram-apps/sdk-react";
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

      if (backButton.show.isAvailable()) {
        backButton.show();
      }

      if (viewport.requestFullscreen.isAvailable()) {
        viewport.requestFullscreen().then(() => {
          console.log("fullscreen");
          viewport.isFullscreen();
        });
      }
    }
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={tonconnectManifest.url}>
      {children}
    </TonConnectUIProvider>
  );
}
