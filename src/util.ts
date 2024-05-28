import { Item, StoreState } from "./core/types";

export const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export const generateDefaultState = <ItemState>(
  set: (
    partial:
      | StoreState<ItemState>
      | Partial<StoreState<ItemState>>
      | ((
          state: StoreState<ItemState>
        ) => StoreState<ItemState> | Partial<StoreState<ItemState>>)
  ) => void
): StoreState<ItemState> => {
  return {
    items: [],
    open: (item) => {
      const id = genId();

      set((state) => ({
        items: [
          ...state.items,
          {
            ...(item.hasOwnProperty("element") ? item : { element: item }),
            id,
          } as Item<ItemState>,
        ],
      }));
      return {
        remove: () => {
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }));
        },
        id,
      };
    },
    close: (id) => {
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      }));
    },
    closeAll: () => {
      set({
        items: [],
      });
    },
  };
};
