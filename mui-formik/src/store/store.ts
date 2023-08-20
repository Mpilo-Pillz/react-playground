import { create } from "zustand";
import { USERDATA } from "../constants/constants";
import { LoggedInUser } from "../components/user/types";

interface AppStore {
  isLoggedIn: boolean;
  userData: LoggedInUser;
  setIsLoggedIn: () => void;
  setIsLoggedOut: () => void;

  setUserData: (arg: any) => any;
}
interface ProductStore {
  selectedProduct: {};
  setSelectedProduct: (product: any) => any;
}
interface AddressStore {
  userAddresses: [];
  setUserAddresses: (address: any) => any;
}

const useStore = create<AppStore>((set) => ({
  isLoggedIn: !!localStorage.getItem(USERDATA),
  userData: JSON.parse(localStorage.getItem(USERDATA) as string) || null,
  setIsLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setIsLoggedOut: () => set(() => ({ isLoggedIn: false })),
  setUserData: (userData: any) => {
    return set((state) => ({
      ...state,
      userData,
    }));
  },
  // setUserData: () => {
  //   set((userData: LoggedInUser) => ({
  //     userData: JSON.parse(localStorage.getItem(USERDATA) as string) || null,
  //   })),
  // }
}));

export const productStore = create<ProductStore>((set) => ({
  selectedProduct: {},
  setSelectedProduct: (product: any[]) => {
    return set((state) => ({
      selectedProduct: product,
    }));
  },
}));

export const useAddressStore = create<AddressStore>((set: any) => ({
  userAddresses: [],
  setUserAddresses: (addresses: any[]) => {
    return set((state: any) => ({
      userAddresses: addresses,
    }));
  },
}));

export default useStore;
