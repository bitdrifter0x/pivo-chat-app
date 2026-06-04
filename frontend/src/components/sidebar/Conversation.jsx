import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import { FaCircleUser } from "react-icons/fa6";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-4 items-center  p-3 py-3 cursor-pointer transition-colors duration-200
    ${isSelected
						? "bg-[#65BCA1]/40"
						: "hover:bg-[#262626] border border-transparent"
					}`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar flex-shrink-0 ${isOnline ? "online" : ""}`}>
					<div className='w-10 rounded-full'>
						{conversation.profilePic ? (
							<img src={conversation.profilePic} alt='user avatar' className='w-10 h-10 rounded-full' />
						) : (
							<FaCircleUser className={`w-10 h-10 ${isSelected ? "text-[#E8E8E8]" : "text-[#E8E8E8]"}`} />
						)}
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3'>
						<p className={`text-md leading-none ${isSelected ? "text-[#E8E8E8]" : "text-[#E8E8E8]"}`}>
							{conversation.fullName}
						</p>
					</div>
				</div>
			</div>

			{!lastIdx}
		</>
	);
};
export default Conversation;

// STARTER CODE SNIPPET
// const Conversation = () => {
// 	return (
// 		<>
// 			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
// 				<div className='avatar online'>
// 					<div className='w-12 rounded-full'>
// 						<img
// 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// 							alt='user avatar'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>John Doe</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='divider my-0 py-0 h-1' />
// 		</>
// 	);
// };
// export default Conversation;






// STARTER CODE SNIPPET
// const Conversation = () => {
// 	return (
// 		<>
// 			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
// 				<div className='avatar online'>
// 					<div className='w-12 rounded-full'>
// 						<img
// 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// 							alt='user avatar'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>John Doe</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='divider my-0 py-0 h-1' />
// 		</>
// 	);
// };
// export default Conversation;