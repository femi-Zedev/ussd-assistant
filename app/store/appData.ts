import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppData {
  firstAppLaunch: boolean;
  setFirstAppLaunch: (value: boolean) => void;
}


const useAppStore = create<AppData>()(
    persist(
      (set, get) => ({
        firstAppLaunch: true,
        setFirstAppLaunch: (value) => set(() => ({ firstAppLaunch: value })),
      }),
      {
        name: "AppData",
        storage: createJSONStorage(() => AsyncStorage),
      }
      )
  );

export default useAppStore;