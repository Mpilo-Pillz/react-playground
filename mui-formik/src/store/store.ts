import { create } from "zustand";

interface AppStore {
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
}

const useStore = create<AppStore>((set) => ({
  isLoggedIn: true,
  setIsLoggedIn: () => set((state) => ({ isLoggedIn: state.isLoggedIn })),
}));

export default useStore;
