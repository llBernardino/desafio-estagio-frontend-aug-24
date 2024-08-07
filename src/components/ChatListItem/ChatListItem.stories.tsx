import { Meta, StoryFn } from '@storybook/react';
import { ChatListItem, ChatListItemProps } from './ChatListItem';
import hyerdev from '../../assets/hyerdevprofile.png';

// Exportando a configuração do componente para o Storybook
export default {
  title: 'Components/ChatListItem',
  component: ChatListItem,
} as Meta;

// Template para o componente ChatListItem
const Template: StoryFn<ChatListItemProps> = (args) => <ChatListItem {...args} />;

// Definindo uma variação padrão (Default) do componente ChatListItem
export const Default = Template.bind({});
Default.args = {
  conversation: 'Juliana: Oii, vou analisar seu currículo e portfólio online e...',
  name: 'hyerdev',
  image: hyerdev,
};
