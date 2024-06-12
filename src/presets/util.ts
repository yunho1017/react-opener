import { type StoreState } from "./types";

const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export const generateDefaultState = <
  Item extends Record<string, any>,
  InputItem = Item
>(
  set: (
    partial:
      | StoreState<Item, InputItem>
      | Partial<StoreState<Item, InputItem>>
      | ((
          state: StoreState<Item, InputItem>
        ) => StoreState<Item, InputItem> | Partial<StoreState<Item, InputItem>>)
  ) => void
): StoreState<Item, InputItem> => {
  const updateItems = (
    updater: (items: (Item & { id: string })[]) => (Item & { id: string })[]
  ) => {
    set((state) => ({ items: updater(state.items) }));
  };
  const closeItem = (id: string) =>
    updateItems((items) => items.filter((item) => item.id !== id));

  return {
    items: [],
    open: (item) => {
      const id = genId();

      updateItems((items) => [
        ...items,
        { ...item, id } as unknown as Item & { id: string },
      ]);

      return {
        close: () => closeItem(id),
        id,
      };
    },
    close: closeItem,
    closeAll: () => set({ items: [] }),
  };
};
