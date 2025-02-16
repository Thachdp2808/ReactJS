import { TabType, SubTab } from "@src/constants/shop.constants";
import { create } from "zustand";

type NavigationStateType = {
  tabId: TabType;
  subTabId: SubTab;
  currentPage: number;
  rows: any[];
  search: string;
  multiSelect: boolean;
  accessToken: string;
};

type NavigationActionType = {
  setTabId: (tabId: TabType) => void;
  setSubTabId: (subTabId: SubTab) => void;
  setCurrentPage: (currentPage: number) => void;
  setRows: (rows: any[]) => void;
  setSearch: (search: string) => void;
  setMultiSelect: (multiSelect: boolean) => void;
  setAccessToken: (accessToken: string) => void;
};

export const useNavigationStore = create<
  NavigationStateType & NavigationActionType
>((set) => ({
  tabId: TabType.Home,
  subTabId: SubTab.Information,
  currentPage: 0,
  rows: [],
  search: "",
  multiSelect: false,
  accessToken: "",
  setCurrentPage: (currentPage) => set((state) => ({ ...state, currentPage })),
  setRows: (rows: any[]) => set((state) => ({ ...state, rows })),
  setTabId: (tabId) => set((state) => ({ ...state, tabId })),
  setSubTabId: (subTabId) => set((state) => ({ ...state, subTabId })),
  setSearch: (search) => set((state) => ({ ...state, search })),
  setMultiSelect: (multiSelect) => set((state) => ({ ...state, multiSelect })),
  setAccessToken: (accessToken) => set((state) => ({ ...state, accessToken })),
}));
