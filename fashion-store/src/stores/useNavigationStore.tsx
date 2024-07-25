import {  TabType } from '@src/constants/shop.constants';
import { create } from 'zustand';

type NavigationStateType = {
    tabId: TabType;
    currentPage: number;
    rows: any[];
    search: string;
    multiSelect: boolean;
  };
  
  type NavigationActionType = {
    setTabId: (tabId: TabType) => void;
    setCurrentPage: (currentPage: number) => void;
    setRows: (rows: any[]) => void;
    setSearch: (search: string) => void;
    setMultiSelect: (multiSelect: boolean) => void;
  };
  
  export const useNavigationStore = create<NavigationStateType & NavigationActionType>(set => ({
    tabId: TabType.Home,
    currentPage: 0,
    rows: [],
    search: '',
    multiSelect: false,
    setCurrentPage: currentPage => set(state => ({ ...state, currentPage })),
    setRows: (rows: any[]) => set(state => ({ ...state, rows })),
    setTabId: tabId => set(state => ({ ...state, tabId })),
    setSearch: search => set(state => ({...state, search})),
    setMultiSelect: multiSelect => set(state => ({...state, multiSelect})),
  }));