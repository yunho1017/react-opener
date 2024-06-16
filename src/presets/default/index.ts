import { createOpenerStore } from "./store";
import { ReactOpener as _ReactOpener } from "./Renderer";
import { useOpener } from "./useOpener";

type CompoundedComponent = typeof _ReactOpener & {
  createStore: typeof createOpenerStore;
  useOpener: typeof useOpener;
};

const ReactOpener = _ReactOpener as CompoundedComponent;

ReactOpener.createStore = createOpenerStore;
ReactOpener.useOpener = useOpener;

export { ReactOpener };
