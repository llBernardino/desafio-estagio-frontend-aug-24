import { Head } from "./components/Head/head";
import { ChatListSearch } from "./components/ChatListSearch/ChatListSearch";

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
