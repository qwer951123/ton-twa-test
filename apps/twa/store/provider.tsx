import { Provider as JotaiProvider, createStore } from "jotai";

const store = createStore();

// create jotai store
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider store={store}>{children}</JotaiProvider>;
};
