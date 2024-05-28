import { createOpenerStore } from "./store";
import { ReactOpener as _ReactOpener } from "./renderer";

type CompoundedComponent = typeof _ReactOpener & {
  createStore: typeof createOpenerStore;
};

const ReactOpener = _ReactOpener as CompoundedComponent;

ReactOpener.createStore = createOpenerStore;

export { ReactOpener };
