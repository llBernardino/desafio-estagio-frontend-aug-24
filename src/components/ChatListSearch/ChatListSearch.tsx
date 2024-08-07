// src/components/ChatListSearch/ChatListSearch.tsx
import React, { useEffect } from 'react';
import {
  Command,
  CommandGroup,
} from "@/components/ui/command";
import { useChatStore } from '@/store/chatStore';
import { ScrollArea } from '../ui/scroll-area';
import { ChatListFilter } from '../ChatListFilter/ChatListFilter';
import { ChatList } from '../ChatList/ChatList';

export const ChatListSearch: React.FC = () => {
  const { searchTerm, setSearchTerm, filter, setFilter } = useChatStore();

  const handleFilterChange = (newFilter: 'all'| 'unread' | 'group') => {
    setFilter(newFilter);
    const params = new URLSearchParams(location.search);
    params.set('filter', newFilter);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    const params = new URLSearchParams(location.search);
    params.set('searchTerm', newSearchTerm);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchTermFromURL = params.get('searchTerm') || '';
    const filterFromURL = params.get('filter') as 'unread' | 'group' | 'all' |null;
    setSearchTerm(searchTermFromURL);
    setFilter(filterFromURL || 'all');
  }, [location.search, setSearchTerm, setFilter]);

 
  return (
    <section className="ChatListSearch" style={{ width: '560px' }}>
      <Command className="rounded-none">
        <div className='flex justify-between'>
          <div className="flex-1 bg-[#111b21] py-4 pl-4 pr-1 ">
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full search bg-[#202c33] text-slate-400 p-2 pl-12 py-2 rounded-xl text-xl"
            />
          </div>
          <ChatListFilter onFilterChange={handleFilterChange} />
        </div>
        <ScrollArea className="h-[100vh] text-slate-400 bg-[#111b21] border-solid border-2 border-[#222d34]">
          <CommandGroup>
            <ChatList searchTerm={searchTerm} filter={filter} />
          </CommandGroup>
        </ScrollArea>
      </Command>
    </section>
  );
};
