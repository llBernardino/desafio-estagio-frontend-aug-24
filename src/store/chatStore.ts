// src/store/chatStore.ts
import create from 'zustand';

interface ChatStore {
  searchTerm: string;
  filter: 'all' | 'unread' | 'group'; // Adicionando o estado para o filtr
  setSearchTerm: (term: string) => void;
  setFilter: (filter: 'all' | 'unread' | 'group') => void; // Função para atualizar o filtro
}

export const useChatStore = create<ChatStore>((set) => ({
  searchTerm: '',
  filter: 'all', // Valor inicial do filtro
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilter: (filter) => set({ filter }),
}));
