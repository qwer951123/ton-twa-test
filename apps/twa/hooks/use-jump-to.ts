"use client";

import { useRouter } from "next/navigation";

export const useJumpTo = () => {
  const router = useRouter();

  return (url: string) => router.push(url);
};
