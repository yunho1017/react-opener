// TBD
import { createMessageStore } from "./store";
import { ReactMessageOpener as _ReactMessageOpener } from "./renderer";

type CompoundedComponent = typeof _ReactMessageOpener & {
  createStore: typeof createMessageStore;
};

const ReactMessageOpener = _ReactMessageOpener as CompoundedComponent;

ReactMessageOpener.createStore = createMessageStore;

export { ReactMessageOpener };
