import useSyncExternalStoreExports from "use-sync-external-store/shim/with-selector";

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;

interface StoreApi<T> {
  setState: (partial: T | Partial<T> | ((state: T) => T | Partial<T>)) => void;
  getState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
  getInitialState: () => T;
}

export function createStore<TState extends Record<string, any>>(
  createState: (setState: StoreApi<TState>["setState"]) => TState
) {
  type Listener = (state: TState, prevState: TState) => void;
  let state: TState;
  const listeners: Set<Listener> = new Set();
  const setState: StoreApi<TState>["setState"] = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state =
        typeof nextState !== "object" || nextState === null
          ? (nextState as TState)
          : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  const getState: StoreApi<TState>["getState"] = () => state;

  const subscribe: StoreApi<TState>["subscribe"] = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const getInitialState: StoreApi<TState>["getInitialState"] = () =>
    initialState;

  const api = {
    setState,
    getState,
    subscribe,
    useStore: <T = TState>(
      selector: (state: TState) => T = (state: TState) => state as unknown as T
    ) => {
      return useSyncExternalStoreWithSelector<
        TState,
        ReturnType<typeof selector>
      >(subscribe, getState, getInitialState, selector);
    },
  };
  const initialState = (state = createState(setState));

  return api;
}
