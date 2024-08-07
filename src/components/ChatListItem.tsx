import { Avatar, AvatarImage } from "@/components/ui/avatar";
import hyerdev from "../assets/hyerdevprofile.png";
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
export const chatperson = [
  {
    name: 'hyerdev',
    conversation: ' Juliana: Oii, vou analisar seu currículo e portfólio online e...',
    image: hyerdev,
  },
  {
    name: 'Bob',
    conversation: 'Bob: Ei, preciso que você me envie os documentos para a reunião de amanhã.',
    image: hyerdev,
  },
  {
    name: 'Charlie',
    conversation: 'Charlie: Oi, gostaria de saber se você pode me ajudar com o relatório de vendas.',
    image: hyerdev,
  },
  {
    name: 'David',
    conversation: 'David: Bom dia! Estou enviando o orçamento atualizado para o cliente.',
    image: hyerdev,
  },
  {
    name: 'Eva',
    conversation: 'Eva: Olá, acabei de revisar o contrato e tenho algumas observações para compartilhar.',
    image: hyerdev,
  },
  {
    name: 'Frank',
    conversation: 'Frank: Oi, você pode confirmar a data da nossa próxima reunião?',
    image: hyerdev,
  },
  {
    name: 'Grace',
    conversation: 'Grace: Ei, estou aguardando o seu feedback sobre o design do novo site.',
    image: hyerdev,
  },
  {
    name: 'Hannah',
    conversation: 'Hannah: Olá, você pode me enviar o material para a apresentação de amanhã?',
    image: hyerdev,
  },
  {
    name: 'Ian',
    conversation: 'Ian: Bom dia! Já teve a chance de revisar o plano de marketing?',
    image: hyerdev,
  },
  {
    name: 'Jack',
    conversation: 'Jack: Oi, por favor, me atualize sobre o status do projeto.',
    image: hyerdev,
  },
  {
    name: 'Karen',
    conversation: 'Karen: Olá, preciso discutir alguns pontos do relatório com você.',
    image: hyerdev,
  },
  {
    name: 'Leo',
    conversation: 'Leo: Ei, você pode revisar os dados da pesquisa e me dar um retorno?',
    image: hyerdev,
  },
  {
    name: 'Mia',
    conversation: 'Mia: Olá, estou enviando o resumo da reunião de ontem.',
    image: hyerdev,
  },
  {
    name: 'Nina',
    conversation: 'Nina: Oi, gostaria de saber se você conseguiu resolver o problema técnico.',
    image: hyerdev,
  },
  {
    name: 'Oscar',
    conversation: 'Oscar: Bom dia! Agradeço se puder me enviar o feedback sobre o projeto.',
    image: hyerdev,
  },
  {
    name: 'Paula',
    conversation: 'Paula: Ei, você pode revisar a proposta e me dar um retorno?',
    image: hyerdev,
  },
  {
    name: 'Quincy',
    conversation: 'Quincy: Olá, estou enviando as atualizações que você solicitou.',
    image: hyerdev,
  },
  {
    name: 'Rachel',
    conversation: 'Rachel: Oi, você pode me ajudar com a revisão do contrato?',
    image: hyerdev,
  },
  {
    name: 'Steve',
    conversation: 'Steve: Bom dia! Gostaria de confirmar a data para a nossa próxima reunião.',
    image: hyerdev,
  },
  {
    name: 'Tina',
    conversation: 'Tina: Ei, você pode me enviar a lista de tarefas para o projeto?',
    image: hyerdev,
  },
  {
    name: 'Uma',
    conversation: 'Uma: Olá, preciso de ajuda com o planejamento estratégico para o próximo trimestre.',
    image: hyerdev,
  },
];

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
