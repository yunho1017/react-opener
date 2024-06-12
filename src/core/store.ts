interface StoreApi<T> {
  setState: (partial: T | Partial<T> | ((state: T) => T | Partial<T>)) => void;
  getState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
  getInitialState: () => T;
}

export function createStore<State extends Record<string, any>>(
  createState: (setState: StoreApi<State>["setState"]) => State
) {
  type Listener = (state: State, prevState: State) => void;
  let state: State;
  const listeners: Set<Listener> = new Set();
  const setState: StoreApi<State>["setState"] = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state =
        typeof nextState !== "object" || nextState === null
          ? (nextState as State)
          : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  const getState: StoreApi<State>["getState"] = () => state;

  const subscribe: StoreApi<State>["subscribe"] = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const getInitialState: StoreApi<State>["getInitialState"] = () =>
    initialState;

  const api = {
    setState,
    getState,
    subscribe,
    getInitialState,
  };

  const initialState = (state = createState(setState));

  return api;
}
