import {  TabType } from '@src/constants/shop.constants';
import { create } from 'zustand';

type NavigationStateType = {
    tabId: TabType;
  };
  
  type NavigationActionType = {
    setTabId: (tabId: TabType) => void;
  };
  
  export const useNavigationStore = create<NavigationStateType & NavigationActionType>(set => ({
    tabId: TabType.Home,
    setTabId: tabId => set(state => ({ ...state, tabId })),
  }));