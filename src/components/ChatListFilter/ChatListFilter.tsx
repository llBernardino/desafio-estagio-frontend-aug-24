// // components/ChatListSearch/ChatListFilter.jsx
// import React, { useState } from 'react';
// import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'; // Certifique-se de ter um modal de sua escolha
// import { useChatStore } from '../../store/chatStore';

// export const ChatListFilter = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const filter = useChatStore((state) => state.filter);
//   const setFilter = useChatStore((state) => state.setFilter);

//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>Filter</button>
//       {isOpen && (
//         <Dialog onDismiss={() => setIsOpen(false)}>
//           <DialogOverlay>
//             <DialogContent className="filter-modal">
//               <h2>Filter Chats</h2>
//               <div>
//                 <label>
//                   <input
//                     type="radio"
//                     checked={filter === 'all'}
//                     onChange={() => setFilter('all')}
//                   />
//                   All
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <input
//                     type="radio"
//                     checked={filter === 'unread'}
//                     onChange={() => setFilter('unread')}
//                   />
//                   Unread
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <input
//                     type="radio"
//                     checked={filter === 'groups'}
//                     onChange={() => setFilter('groups')}
//                   />
//                   Groups
//                 </label>
//               </div>
//               <button onClick={() => setIsOpen(false)}>Close</button>
//             </DialogContent>
//           </DialogOverlay>
//         </Dialog>
//       )}
//     </>
//   );
// };
