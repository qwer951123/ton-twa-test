import { Navigator } from "../types";
import { AccountIcon, ChartIcon, SendIcon, WalletIcon } from "@repo/ui/icons";

export const navigator: Navigator = [
  {
    label: "Earn",
    href: "/",
    icon: <ChartIcon />,
  },
  {
    label: "Send",
    href: "/send",
    icon: <SendIcon />,
  },
  {
    label: "Spend",
    href: "/spend",
    icon: <WalletIcon />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <AccountIcon />,
  },
];
