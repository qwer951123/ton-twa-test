import { ModalState } from "./types";
import { atomWithImmer } from "jotai-immer";

export const modalsAtom = atomWithImmer<ModalState>({});
