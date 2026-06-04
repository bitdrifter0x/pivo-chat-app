import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";
import { FaCircleUser } from "react-icons/fa6";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-9 rounded-full'>
					{profilePic ? (
						<img alt='user avatar' src={profilePic} />
					) : (
						<FaCircleUser className='w-9 h-9 text-[#E8E8E8]' />
					)}
				</div>
			</div>
			<div className={`chat-bubble text-sm ${shakeClass}
				${fromMe 
					? "bg-[#65BCA1] text-[#1C1C1C]" 
					: "bg-[#262626] text-[#E8E8E8]"
				}`}
			>
				{message.message}
			</div>
			<div className='chat-footer text-[#555] text-xs mt-1'>{formattedTime}</div>
		</div>
	);
};
export default Message;
