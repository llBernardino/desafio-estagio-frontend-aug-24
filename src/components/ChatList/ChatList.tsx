// src/components/ChatList/ChatList.tsx
import React from 'react';
import { ScrollArea } from "../ui/scroll-area";
import { ChatListItem } from "../ChatListItem/ChatListItem";
import { chatperson } from "../ChatListItem/chatpersondata";

interface ChatListProps {
  searchTerm: string;
  filter: 'all' | 'unread' | 'group';
}

export const ChatList: React.FC<ChatListProps> = ({ searchTerm, filter }) => {
  const filteredChats = chatperson.filter((person) => {
    const matchesSearchTerm = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.conversation.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'all') {
      return searchTerm === "" || matchesSearchTerm; 
    }

    if (filter === 'unread') {
      return matchesSearchTerm && person.unread;
    }

    if (filter === 'group') {
      return matchesSearchTerm && person.group;
    }

    return false;
  });

  return (
    <div className="min-h-screen w-full flex">
      <ScrollArea>
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
      </ScrollArea>
    </div>
  );
};
