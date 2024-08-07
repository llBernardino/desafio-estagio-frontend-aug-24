import { Head } from "./components/Head/head";
import { ChatListSearch } from "./components/ChatListSearch/ChatListSearch";
import { ChatList } from "./components/ChatList/ChatList";

function App() {
  return (
    <div className="min-h-screen w-full flex pl-16 pt-5">
      <div>
        <Head />
        <ChatListSearch />
        
      </div>
    </div>
  );
}

export default App;
