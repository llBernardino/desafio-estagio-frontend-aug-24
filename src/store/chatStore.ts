// src/store/chatStore.ts
import create from 'zustand';

interface ChatStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
