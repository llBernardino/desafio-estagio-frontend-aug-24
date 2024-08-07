// src/components/ChatListSearch/ChatListSearch.tsx
import React from 'react';
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
  const { searchTerm, setSearchTerm, filter } = useChatStore();

  const filteredChats = chatperson.filter((person) => {
    // Filtra pelo termo de pesquisa
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          person.conversation.toLowerCase().includes(searchTerm.toLowerCase());

    // Aplica o filtro selecionado
    if (filter === 'unread') {
      return matchesSearch && person.unread;
    } else if (filter === 'group') {
      return matchesSearch && person.group;
    } else {
      return matchesSearch;
    }
  });

  return (
    <section className="ChatListSearch" style={{width:'560px'}}>
      <Command className="rounded-none">
        <div className='flex justify-between'>
            <div className="flex-1 bg-[#111b21] py-4 pl-4 pr-1">
            <input
                type="text"
                placeholder=" Pesquisar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full search bg-[#202c33] text-slate-400 p-2 pl-12 py-2 rounded-xl text-xl"
            />
            </div>
            <ChatListFilter />
        </div>
        <ScrollArea className="h-[100vh] text-slate-400 bg-[#111b21] border-solid border-2 border-[#222d34]">
          {filteredChats.length === 0 ? (
            <CommandEmpty className="p-5 pt-20 text-center text-lg">
              Nenhuma conversa, contato ou <br />mensagem encontrada
            </CommandEmpty>
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
