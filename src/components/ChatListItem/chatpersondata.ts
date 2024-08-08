import hyerdev from "../../assets/hyerdevprofile.png";
import perfil2 from "../../assets/profileicon1.png";
import perfil3 from "../../assets/profileicon2.png";
import perfil4 from "../../assets/profileicon3.png";
import perfil5 from "../../assets/profileicon4.png";
import perfil6 from "../../assets/profileicon5.png";
import perfil7 from "../../assets/profileicon6.png";

export interface ChatListItemProps {
  name: string;
  conversation: string;
  image: string;
  unread: boolean; 
  group: boolean;  
}
export const chatperson = [
  {
    name: 'Hyerdev',
    conversation: ' Juliana: Oii, vou analisar seu currículo e portfólio online e...',
    image: hyerdev,
    unread: false,
    group: false,
  },
  {
    name: 'Grupo do Bob',
    conversation: 'Bob: Ei, preciso que você me envie os documentos para a reunião de amanhã.',
    image: perfil2,
    unread: false,
    group: true,
  },
  {
    name: 'Charlie',
    conversation: 'Charlie: Oi, gostaria de saber se você pode me ajudar com o relatório de vendas.',
    image: perfil3,
    unread: false,
    group: false,
  },
  {
    name: 'Grupo do David',
    conversation: 'David: Bom dia! Estou enviando o orçamento atualizado para o cliente.',
    image: perfil4,
    unread: false,
    group: true,
  },
  {
    name: 'Eva',
    conversation: '* Não Lida * Eva: Olá, acabei de revisar o contrato e tenho algumas observações para compartilhar.',
    image: perfil5,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Frank',
    conversation: 'Frank: Oi, você pode confirmar a data da nossa próxima reunião?',
    image: perfil6,
    unread: false,
    group: false,
  },
  {
    name: 'Grace',
    conversation: ' Grace: Ei, estou aguardando o seu feedback sobre o design do novo site.',
    image: perfil7,
    unread:false,
    group: false,
  },
  {
    name: 'Grupo do Hannah',
    conversation: 'Hannah: Olá, você pode me enviar o material para a apresentação de amanhã?',
    image: hyerdev,
    unread: false,
    group: true,
  },
  {
    name: 'Ian',
    conversation: '* Não Lida * Ian: Bom dia! Já teve a chance de revisar o plano de marketing?',
    image: perfil2,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Jack',
    conversation: 'Jack: Oi, por favor, me atualize sobre o status do projeto.',
    image: perfil3,
    unread: false,
    group: true,
  },
  {
    name: 'Karen',
    conversation: '* Não Lida * Karen: Olá, preciso discutir alguns pontos do relatório com você.',
    image: perfil4,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Leo',
    conversation: 'Leo: Ei, você pode revisar os dados da pesquisa e me dar um retorno?',
    image: perfil5,
    unread: false,
    group: true,
  },
  {
    name: 'Mia',
    conversation: '* Não Lida * Mia: Olá, estou enviando o resumo da reunião de ontem.',
    image: perfil6,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Nina',
    conversation: 'Nina: Oi, gostaria de saber se você conseguiu resolver o problema técnico.',
    image: perfil7,
    unread: false,
    group: true,
  },
  {
    name: 'Oscar',
    conversation: '* Não Lida * Oscar: Bom dia! Agradeço se puder me enviar o feedback sobre o projeto.',
    image: hyerdev,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Paula',
    conversation: 'Paula: Ei, você pode revisar a proposta e me dar um retorno?',
    image: perfil2,
    unread: false,
    group: true,
  },
  {
    name: 'Quincy',
    conversation: '* Não Lida * Quincy: Olá, estou enviando as atualizações que você solicitou.',
    image: perfil3,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Rachel',
    conversation: 'Rachel: Oi, você pode me ajudar com a revisão do contrato?',
    image: perfil4,
    unread: false,
    group: true,
  },
  {
    name: 'Steve',
    conversation: '* Não Lida * Steve: Bom dia! Gostaria de confirmar a data para a nossa próxima reunião.',
    image: perfil5,
    unread: true,
    group: false,
  },
  {
    name: 'Grupo do Tina',
    conversation: 'Tina: Ei, você pode me enviar a lista de tarefas para o projeto?',
    image: perfil6,
    unread: false,
    group: true,
  },
  {
    name: 'Uma',
    conversation: '* Não Lida * Uma: Olá, preciso de ajuda com o planejamento estratégico para o próximo trimestre.',
    image: perfil7,
    unread: true,
    group: false,
  },
];

