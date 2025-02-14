"use client";

import { usePathname } from "next/navigation";

/**
 * return true if the current pathname is match the href
 * @param href
 * @param options
 * @returns boolean
 */
export function useIsMatchRoute(
  href: string,
  options: { exact?: boolean } = {}
) {
  const pathname = usePathname();

  if (options.exact) {
    return pathname === href;
  }

  // if the href is "/", should always exact match
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}
