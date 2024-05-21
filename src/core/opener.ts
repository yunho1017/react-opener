import { createStore } from "./store";
import { Item, StoreState } from "./types";

const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export const createOpenerStore = <TItemState = any>() =>
  createStore<StoreState<TItemState>>((set) => ({
    items: [],
    add: (item) => {
      const id = genId();

      set((state) => ({
        items: [
          ...state.items,
          {
            ...(Object.hasOwn(item, "element") ? item : { element: item }),
            id,
          } as Item<TItemState>,
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
    remove: (id) => {
      set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
    },
    clearAll: () => {
      set({
        items: [],
      });
    },
  }));
