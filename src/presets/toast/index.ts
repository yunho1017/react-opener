import { createToastStore } from "./store";
import { ReactToastOpener as _ReactToastOpener } from "./Renderer";
import { useToast } from "./useToast";
import { setup } from "goober";
import { createElement } from "react";

setup(createElement);

type CompoundedComponent = typeof _ReactToastOpener & {
  createStore: typeof createToastStore;
  useToast: typeof useToast;
};

const ReactToastOpener = _ReactToastOpener as CompoundedComponent;

ReactToastOpener.createStore = createToastStore;
ReactToastOpener.useToast = useToast;

export { ReactToastOpener };
