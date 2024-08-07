// src/components/ChatListSearch/ChatListSearch.tsx
import React from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandList,
} from "@/components/ui/command";

import { ChatListItem } from "../ChatListItem/ChatListItem";
import { useChatStore } from '@/store/chatStore';
import { chatperson } from "../ChatListItem/chatpersondata";
import { ScrollArea } from '../ui/scroll-area';

export const ChatListSearch: React.FC = () => {
  const { searchTerm, setSearchTerm } = useChatStore();

  const filteredChats = chatperson.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.conversation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="ChatListSearch" style={{width:'560px'}}>
      <Command className=" rounded-none">
        <div className=" bg-[#111b21] py-4 px-5">
          <input
            type="text"
            placeholder=" Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full search bg-[#202c33] text-slate-400 p-2 pl-12 py-2 rounded-xl text-xl "
          />
        </div>
        <ScrollArea className="h-[100vh]  text-slate-400 bg-[#111b21] border-solid border-2 border-[#222d34]">
          {filteredChats.length === 0 ? (
            <CommandEmpty className=" p-5 pt-20 text-center text-lg ">Nenhuma conversa, contato ou <br></br>mensagem encontrada</CommandEmpty>
          ) : (
            <CommandGroup>
              {filteredChats.map((person, index) => (
                <div className="py-1 " key={index}>
                  <ChatListItem 
                    conversation={person.conversation}
                    name={person.name}
                    image={person.image}
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
