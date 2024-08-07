
import { ScrollArea } from "../ui/scroll-area";
import { ChatListItem } from "../ChatListItem/ChatListItem";
import { chatperson } from "../ChatListItem/chatpersondata";


export const ChatList = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div>
      <ScrollArea className="h-[100vh] bg-[#111b21] border-solid border-2 border-[#222d34]">
        {chatperson.map((person, index) => (
          <div className="py-1">
            <ChatListItem 
              key={index}
              conversation={person.conversation}
              name={person.name}
              image={person.image}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
    </div>
  );
}

