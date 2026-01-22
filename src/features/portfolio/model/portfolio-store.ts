import { create } from 'zustand';

interface PortfolioStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  activeSection: 'home',
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
