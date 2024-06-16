import { createToastStore } from "./store";
import { ReactToastOpener as _ReactToastOpener } from "./Renderer";
import { useToast } from "./useToast";

type CompoundedComponent = typeof _ReactToastOpener & {
  createStore: typeof createToastStore;
  useToast: typeof useToast;
};

const ReactToastOpener = _ReactToastOpener as CompoundedComponent;

ReactToastOpener.createStore = createToastStore;
ReactToastOpener.useToast = useToast;

export { ReactToastOpener };
