// src/store/chatStore.ts
import create from 'zustand';

interface ChatStore {
  searchTerm: string;
  filter: 'all' | 'unread' | 'group';
  setSearchTerm: (term: string) => void;
  setFilter: (filter: 'all' | 'unread' | 'group') => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  searchTerm: '',
  filter: 'all',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilter: (filter) => set({ filter }),
}));
