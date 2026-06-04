import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = ({ onHamburgerClick }) => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleKeyDown = (e) => {
		if (e.key !== "Enter") return;
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}
		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);
		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<div className='flex items-center gap-2'>
			<div className='relative flex-1'>
				<IoSearchSharp className='absolute left-3 top-1/2 -translate-y-1/2 text-[#555] w-4 h-4' />
				<input
					type='text'
					placeholder='Search...'
					className='w-full bg-[#242424] border border-[#2a2a2a] text-[#E8E8E8] text-sm rounded-full py-2.5 pl-9 pr-4 placeholder-[#555] focus:outline-none focus:border-[#65BCA1] transition-colors duration-200'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</div>
	);
};
export default SearchInput;
 
 
 


 // STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />

// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;