import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex-1 flex flex-col bg-[#1C1C1C]'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-[#191919] px-4 py-3 flex items-center gap-3 h-[70px]'>
						<span className='text-[#E8E8E8] text-md'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-[#141414]'>
			<div className='text-center flex flex-col items-center gap-3'>
				<TiMessages className='text-6xl text-[#65BCA1]' />
				<p className='text-[#E8E8E8] text-xl font-semibold'>Welcome, {authUser.fullName} 👋</p>
				<p className='text-[#555] text-sm'>Select a chat to start messaging</p>
			</div>
		</div>
	);
};



// STARTER CODE SNIPPET
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;