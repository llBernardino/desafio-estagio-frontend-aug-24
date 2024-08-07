import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { ChatListItem } from "../ChatListItem/ChatListItem";
import { chatperson } from "../ChatListItem/chatpersondata";
  


export const ChatListSearch = () => {
  return (
    <section className="ChatListSearch">
        <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
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
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        
                </CommandGroup>
            </CommandList>
        </Command>

    </section>
  );
};
