// src/components/ChatListSearch/ChatListSearch.tsx
import React, { useEffect } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { ChatListItem } from "../ChatListItem/ChatListItem";
import { useChatStore } from '@/store/chatStore';
import { chatperson } from "../ChatListItem/chatpersondata";
import { ScrollArea } from '../ui/scroll-area';
import { ChatListFilter } from '../ChatListFilter/ChatListFilter';

export const ChatListSearch: React.FC = () => {
  const { searchTerm, setSearchTerm, filter, setFilter } = useChatStore();

  const filteredChats = chatperson.filter((person) => {
    const matchesSearchTerm = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.conversation.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'all') {
      return matchesSearchTerm;
    }

    if (filter === 'unread') {
      return matchesSearchTerm && person.unread;
    }

    if (filter === 'group') {
      return matchesSearchTerm && person.group;
    }

    return false;
  });

  const handleFilterChange = (newFilter: 'all' | 'unread' | 'group') => {
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
    const filterFromURL = params.get('filter') as 'all' | 'unread' | 'group' | null;

    // Define o valor padrão como 'all' se o filtro da URL não for válido
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
          {filteredChats.length === 0 ? (
            <CommandEmpty className="p-5 pt-20 text-center text-lg">Nenhuma conversa, contato ou <br /> mensagem encontrada</CommandEmpty>
          ) : (
            <CommandGroup>
              {filteredChats.map((person, index) => (
                <div className="py-1" key={index}>
                  <ChatListItem
                    conversation={person.conversation}
                    name={person.name}
                    image={person.image}
                    unread={person.unread}
                    group={person.group}
                  />
                </div>
              ))}
            </CommandGroup>
          )}
        </ScrollArea>
      </Command>
    </section>
  );
};
