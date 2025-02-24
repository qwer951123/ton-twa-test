import { BaseProps } from "./components";

export interface ModalProps extends Omit<BaseProps<"dialog">, "title"> {
  title?: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}
