import { useRef, useEffect } from "react";
import { useTonConnectModal, useTonWallet } from "@repo/ton-connect-ui-react";

type ConnectWrapperProps<T extends React.ComponentType> = {
  as: T;
} & React.ComponentProps<T> & {
    onClick?: () => void;
  };

export const ConnectWrapper = <T extends React.ComponentType>({
  as: Component,
  onClick,
  ...props
}: ConnectWrapperProps<T>) => {
  const { open, state } = useTonConnectModal();
  const wallet = useTonWallet();
  const isConnected = !!wallet;
  const callbackAfterConnect = useRef<() => void>(undefined);

  useEffect(() => {
    // clear the callback if the user cancels the action
    if (state.closeReason === "action-cancelled") {
      callbackAfterConnect.current = undefined;

      return;
    }

    if (state.closeReason === "wallet-selected") {
      callbackAfterConnect.current?.();
      callbackAfterConnect.current = undefined;
    }
  }, [state]);

  const handleClick = () => {
    if (!isConnected) {
      open();
      callbackAfterConnect.current = onClick;
    } else {
      onClick?.();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TypedComponent = Component as unknown as React.ComponentType<any>;

  return <TypedComponent {...props} onClick={handleClick} />;
};
