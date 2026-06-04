import { useState } from "react";
import { IoSend } from "react-icons/io5";  
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='' onSubmit={handleSubmit}>
			<div className='w-full relative flex items-center'>
				<input
					type='text'
					className='w-full h-16 bg-[#191919] text-[#E8E8E8] text-md py-3 px-5 pr-12 placeholder-[#555] focus:outline-none focus:bg-[#232323] transition-colors duration-200'
					placeholder='Send a message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute right-2 w-8 h-8 flex items-center justify-center  transition-colors duration-200'
				>
					{loading
						? <div className='loading loading-spinner w-4 h-4 text-[#1C1C1C]'></div>
						: <IoSend className='w-6 h-6 text-[#c7c7c7] hover:text-[#65BCA1]' />
					}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;



// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;