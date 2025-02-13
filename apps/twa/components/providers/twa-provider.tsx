"use client";

import { init } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

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

  return children;
}
