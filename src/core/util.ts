import type { ItemType, StoreState, StoreApi } from "./types";

const genId = (() => {
  let count = 0;
  return () => (++count).toString();
})();

const createItem = <ItemState extends Record<string, any>>(
  params: Parameters<StoreState<ItemState>["open"]>[0],
  state?: ItemState
) => {
  if (typeof params === "object") {
    return {
      ...params,
      id: params.id ?? genId(),
      isOpen: params.isOpen ?? true,
      state,
    } as ItemType<ItemState>;
  }
  return {
    element: params,
    id: genId(),
    isOpen: true,
    state,
  } as ItemType<ItemState>;
};

export const generateDefaultState = <ItemState extends Record<string, any>>(
  set: StoreApi<StoreState<ItemState>>["setState"]
): StoreState<ItemState> => {
  const updateItems = (
    updater: (items: ItemType<ItemState>[]) => ItemType<ItemState>[]
  ) => {
    set((state) => ({ items: updater(state.items) }));
  };

  const closeItem = (id: string) =>
    updateItems((items) =>
      items.map((item) => (item.id === id ? { ...item, isOpen: false } : item))
    );

  const unmountItem = (id: string) =>
    updateItems((items) => items.filter((item) => item.id !== id));

  const open = (
    params: Parameters<StoreState<ItemState>["open"]>[0],
    state?: ItemState
  ) => {
    const item = createItem(params, state);
    updateItems((items) => [...items, item]);

    return {
      close: () => closeItem(item.id),
      id: item.id,
    };
  };

  const openAsync = <CloseParams>(
    params: Parameters<StoreState<ItemState>["openAsync"]>[0],
    state?: ItemState
  ) => {
    return new Promise<CloseParams>((resolve) => {
      const item = createItem(params, state);

      updateItems((items) => [
        ...items,
        {
          ...item,
          element: ({ close, ...rest }) =>
            item.element({
              ...rest,
              close: (params?: CloseParams) => {
                resolve(params as CloseParams);
                close();
              },
              unmount: (params?: CloseParams) => {
                resolve(params as CloseParams);
                close();
              },
            }),
        },
      ]);
    });
  };

  return {
    items: [],
    open,
    openAsync,
    close: closeItem,
    closeAll: () =>
      updateItems((items) => items.map((item) => ({ ...item, isOpen: false }))),
    unmount: unmountItem,
    unmountAll: () => set({ items: [] }),
  };
};
