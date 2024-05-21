export type Item<S = Record<string, any>> = {
  id: string;
  element:
    | JSX.Element
    | ((params: { state: S; id: string; remove(): void }) => JSX.Element);
  state?: Record<string, any>;
};

export type StoreState<S = Record<string, any>> = {
  items: Item<S>[];
  add: (item: Omit<Item<S>, "id"> | JSX.Element) => {
    remove: () => void;
    id: string;
  };
  remove: (id: string) => void;
  clearAll: () => void;
};
