import { createMMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

export const mmkv = createMMKV({
  id: "settings-storage",
});

export const mmkvStorage: StateStorage = {
  setItem: (name, value) => {
    mmkv.set(name, value);
  },
  getItem: (name) => {
    const value = mmkv.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    mmkv.remove(name);
  },
};
