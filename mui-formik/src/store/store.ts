import { create } from "zustand";
import { USERDATA } from "../constants/constants";

interface AppStore {
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
  setIsLoggedOut: () => void;
}

const useStore = create<AppStore>((set) => ({
  isLoggedIn: !!localStorage.getItem(USERDATA),
  setIsLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setIsLoggedOut: () => set(() => ({ isLoggedIn: false })),
}));

export default useStore;
