import { ChatListItem, chatperson } from "./components/ChatListItem";
import { Head } from "./components/head";
import { ScrollArea } from "./components/ui/scroll-area";
function App() {
  return (
    <div className="min-h-screen w-full flex">
      {" "}
      <div>
        <Head/>
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

export default App;
