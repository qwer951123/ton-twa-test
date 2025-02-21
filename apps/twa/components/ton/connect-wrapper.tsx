import {
  isValidElement,
  cloneElement,
  useRef,
  useEffect,
  ReactElement,
} from "react";
import { useTonConnectModal, useTonWallet } from "@repo/ton-connect-ui-react";
import { BaseProps } from "@repo/ui";

type ConnectWrapperProps = BaseProps<"div"> & {
  children: ReactElement & {
    // ensure the children have onClick props
    props: {
      onClick: () => void;
    };
  };
};

export const ConnectWrapper = ({ children }: ConnectWrapperProps) => {
  const { open } = useTonConnectModal();
  const wallet = useTonWallet();
  const originOnClickRef = useRef<() => void>(null);

  useEffect(() => {
    if (wallet && originOnClickRef.current) {
      originOnClickRef.current?.();
      // clear
      originOnClickRef.current = null;
    }
  }, [wallet]);

  if (isValidElement(children) && !wallet) {
    const originOnClick = children.props.onClick;

    originOnClickRef.current = originOnClick;
    const onClick = wallet ? originOnClick : open;

    return cloneElement(children, { onClick });
  }

  return children;
};
