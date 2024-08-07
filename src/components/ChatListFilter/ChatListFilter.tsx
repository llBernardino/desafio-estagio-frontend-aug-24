// src/components/ChatListFilter/ChatListFilter.tsx
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useChatStore } from '@/store/chatStore';
import { BreadcrumbEllipsis } from '../ui/breadcrumb';

export const ChatListFilter: React.FC = () => {
  const { setFilter } = useChatStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex border-none items-center pr-2 bg-[#111b21]">
        <BreadcrumbEllipsis className="text-white" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className='bg-[#111b21] text-slate-400 border-none'>
        <DropdownMenuItem onClick={() => setFilter('unread')}>Conversa não lidas</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFilter('group')}>Grupos</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFilter('all')}>Todos</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
