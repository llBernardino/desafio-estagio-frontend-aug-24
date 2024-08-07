import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { chatperson } from "./chatpersondata";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

// Defina e exporte a interface ChatListItemProps
export interface ChatListItemProps {
  conversation: string;
  name: string;
  image: string;
}

// Lista de produtos


// Componente ChatListItem com a interface ChatListItemProps
export const ChatListItem: React.FC<ChatListItemProps> = ({ conversation, name, image }) => {
  return (
    <section className="ChatListItem">
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex items-center border-container rounded gap-4 py-3 px-5 min-h-20 max-w-xl w-full bg-[#111b21] hover:bg-[#2a3942]">
            <Avatar className="w-14 h-14">
              <AvatarImage src={image} />
            </Avatar>
            <div className="chatbox w-full">
              <div className="flex justify-between">
                <h1 className="text-lg text-white">{name}</h1>
                <p className="text-xs text-slate-400 flex items-center">Sábado</p>
              </div>
              <div className="textgrup flex items-center max-w-md">
                <FontAwesomeIcon icon={faCheckDouble} className="text-blue-500 mr-1 text-sm" />
                <p className="text-slate-300 overflow-hidden whitespace-nowrap text-ellipsis ">{conversation}</p>
              </div>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="border-transparent w-full max-w-64 bg-[#233138] min-h-64 px-3 py-3">
          <ContextMenuItem className="text-lg text-white py-2">Arquivar conversa</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Silenciar notificações</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Apagar conversa</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Fixar conversa</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Atribuir conversa</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Editar etiqueta</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Marcar como não lida</ContextMenuItem>
          <ContextMenuItem className="text-lg text-white py-2">Bloquear</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </section>
  );
};
