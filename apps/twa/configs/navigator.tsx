import { Navigator } from "../types";
import { AccountIcon, ChartIcon, SendIcon, WalletIcon } from "@repo/ui/icons";

export const navigator: Navigator[] = [
  {
    name: "Earn",
    href: "/",
    icon: <ChartIcon />,
  },
  {
    name: "Send",
    href: "/send",
    icon: <SendIcon />,
  },
  {
    name: "Spend",
    href: "/spend",
    icon: <WalletIcon />,
  },
  {
    name: "Account",
    href: "/account",
    icon: <AccountIcon />,
  },
];
