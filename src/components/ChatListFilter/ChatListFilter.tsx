// src/components/ChatListFilter/ChatListFilter.tsx
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { BreadcrumbEllipsis } from '../ui/breadcrumb';

// Define as props esperadas pelo componente
interface ChatListFilterProps {
  onFilterChange: (newFilter: 'all' | 'unread' | 'group') => void;
}

export const ChatListFilter: React.FC<ChatListFilterProps> = ({ onFilterChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex border-none items-center pr-2 bg-[#111b21]">
        <BreadcrumbEllipsis className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className='bg-[#111b21] text-slate-400 border-none'>
        <DropdownMenuItem onClick={() => onFilterChange('all')}>Todos</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onFilterChange('unread')}>Conversa não lidas</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onFilterChange('group')}>Grupos</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
