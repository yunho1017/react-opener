type ItemElement<T> = (
  params: { close: () => void; unmount: () => void } & Omit<
    ItemType<T>,
    "element"
  >
) => React.ReactNode;

type OpenAsyncItemElement<T, P> = (
  params: {
    close: (params: P) => void;
    unmount: (params: P) => void;
  } & Omit<ItemType<T>, "element">
) => React.ReactNode;

export type ItemType<T> = {
  id: string;
  isOpen: boolean;
  element: ItemElement<T>;
  state: T;
};

export type StoreState<ItemState extends Record<string, any> = {}> = {
  items: ItemType<ItemState>[];
  open: (
    element:
      | (Partial<Pick<ItemType<ItemState>, "id" | "isOpen">> & {
          element: ItemElement<ItemState>;
        })
      | ItemElement<ItemState>,
    state?: ItemState
  ) => {
    close: () => void;
    id: string;
  };
  openAsync: <Params>(
    element:
      | (Partial<Pick<ItemType<ItemState>, "id" | "isOpen">> & {
          element: OpenAsyncItemElement<ItemState, Params>;
        })
      | OpenAsyncItemElement<ItemState, Params>,
    state?: ItemState
  ) => Promise<Params>;
  close: (id: string) => void;
  closeAll: () => void;
  unmount: (id: string) => void;
  unmountAll: () => void;
};

export interface StoreApi<T> {
  setState: (partial: T | Partial<T> | ((state: T) => T | Partial<T>)) => void;
  getState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
  getInitialState: () => T;
}
