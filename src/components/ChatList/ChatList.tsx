// src/components/ChatList/ChatList.tsx
import React from 'react';
import { ScrollArea } from "../ui/scroll-area";
import { ChatListItem } from "../ChatListItem/ChatListItem";
import { chatperson } from "../ChatListItem/chatpersondata";
import { useChatStore } from "../../store/chatStore";

export const ChatList: React.FC = () => {
  const { searchTerm } = useChatStore();

  const filteredChats = chatperson.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.conversation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full flex">
      <ScrollArea className="h-[100vh] bg-[#111b21] border-solid border-2 border-[#222d34]">
        {filteredChats.map((person, index) => (
          <div className="py-1" key={index}>
            <ChatListItem 
              conversation={person.conversation}
              name={person.name}
              image={person.image}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
