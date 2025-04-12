import { generateDefaultState } from "./util";
import type { StoreState, StoreApi } from "./types";

export function createStore<
  ItemState extends Record<string, any> = {},
  AdditionalState extends Record<string, any> = {}
>(
  createState?: (
    setState: StoreApi<StoreState<ItemState> & AdditionalState>["setState"],
    defaultState: StoreState<ItemState>
  ) => StoreState<ItemState> & AdditionalState
) {
  type State = StoreState<ItemState> & AdditionalState;
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

  const defaultState = generateDefaultState(
    setState as StoreApi<StoreState<ItemState>>["setState"]
  ) as State;
  const initialState = (state = createState
    ? createState(setState, defaultState)
    : defaultState);

  return api;
}
