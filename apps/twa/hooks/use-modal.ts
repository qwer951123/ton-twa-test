"use client";

import { useAtom } from "jotai";
import { modalsAtom } from "../store";
import { useCallback, useMemo } from "react";

type ModalData = {
  // undefined is used to indicate that the modal has no data
  "account-drawer": undefined;
  "vault-deposit": undefined;
};

type ModalKey = keyof ModalData;
type ModalDataType = ModalData[ModalKey];

interface ModalChangeOptions {
  closeOthers?: boolean;
}

export const useModal = (key: ModalKey) => {
  const [modals, setModals] = useAtom(modalsAtom);

  const onOpenChange = useCallback(
    (value: boolean, data?: ModalDataType, options?: ModalChangeOptions) => {
      const {
        // Usually set closeOther to true to ensure only one modal is open at a time
        closeOthers = true,
      } = options ?? {};

      setModals((draft) => {
        // create new record if it doesn't exist
        if (!draft[key]) {
          draft[key] = { open: value, data };
        } else {
          draft[key].open = value;

          // is data is not undefined, set it
          if (data !== undefined) {
            draft[key].data = data;
          }
        }

        // close other modals if closeOthers is true
        if (closeOthers) {
          Object.keys(draft).forEach((k) => {
            if (k !== key && draft[k]) {
              draft[k].open = false;
            }
          });
        }
      });
    },
    [key, setModals]
  );

  const isOpen = modals[key]?.open ?? false;
  const data = modals[key]?.data;

  const onToggle = useCallback(() => {
    onOpenChange(!isOpen);
  }, [onOpenChange, isOpen]);

  return useMemo(
    () => ({
      open: isOpen,
      data,
      onOpenChange,
      onToggle,
    }),
    [isOpen, data, onOpenChange, onToggle]
  );
};
