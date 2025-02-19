export interface Modal<T = unknown> {
  open: boolean;
  data: T | undefined;
}

export type ModalState = {
  [key: string]: Modal;
};
