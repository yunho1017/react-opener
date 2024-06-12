export type StoreState<Item extends Record<string, any>, InputItem = Item> = {
  items: (Item & { id: string })[];
  open: (item: InputItem) => {
    close: () => void;
    id: string;
  };
  close: (id: string) => void;
  closeAll: () => void;
};
