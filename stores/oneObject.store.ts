import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

type ObjectType = {
  foo: string;
  bar: number;
};

interface InitialStateType {
  obj: ObjectType;
}

const initialState: InitialStateType = {
  obj: {
    foo: "29way",
    bar: 1,
  },
};

interface StoreType extends InitialStateType {
  dispatchObject: <T extends keyof ObjectType>(
    key: T,
    value: ObjectType[T]
  ) => void;
}
export const useObjectStore = create(
  immer<StoreType>((set) => ({
    ...initialState,
    dispatchObject: (key, value) => {
      set((state) => {
        state.obj[key] = value;
      });
    },
  }))
);
