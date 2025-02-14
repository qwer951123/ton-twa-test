export type BareProps<T extends React.ElementType> = React.ComponentProps<T> & {
  as?: T;
};
