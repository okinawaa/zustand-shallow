import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "29way",
  bar: 123,
};

interface StoreType extends InitialStateType {
  dispatchFoo: (value: string) => void;
  dispatchBar: (value: number) => void;
}
export const usePrimitiveStore = create(
  immer<StoreType>((set) => ({
    ...initialState,
    dispatchFoo: (value) =>
      set((state) => {
        state.foo = value;
      }),
    dispatchBar: (value) =>
      set((state) => {
        state.bar = value;
      }),
  }))
);
