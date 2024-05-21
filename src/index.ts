import { createOpenerStore } from "./core/opener";
import { ReactOpener as _ReactOpener } from "./core/renderer";

type CompoundedComponent = typeof _ReactOpener & {
  createStore: typeof createOpenerStore;
};

const ReactOpener = _ReactOpener as CompoundedComponent;

ReactOpener.createStore = createOpenerStore;

export { ReactOpener };
