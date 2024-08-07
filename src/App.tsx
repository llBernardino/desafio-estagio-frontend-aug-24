
import { ChatList } from "./components/ChatList/ChatList";
import { Head } from "./components/Head/head";

function App() {
  return (
    <div className="min-h-screen w-full flex">
      <div>
        <Head/>
        {/* <ChatListSearch/> */}
        <ChatList/>
      </div>
    </div>
  );
}

export default App;
