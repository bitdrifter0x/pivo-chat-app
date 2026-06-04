import { useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
	const [panelOpen, setPanelOpen] = useState(false);

	return (
		<div className='w-128 border-r border-[#131313] flex flex-col bg-[#191919] relative overflow-hidden'>
			
			{/* Search + Hamburger */}
			<div className='p-4 flex items-center gap-3'>
				<button
					onClick={() => setPanelOpen(true)}
					className='w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#262626] transition-colors duration-200'
				>
					<RxHamburgerMenu className='w-5 h-5 text-[#E8E8E8]' />
				</button>
				<div className='flex-1'>
					<SearchInput />
				</div>
			</div>
			<Conversations />

			{/* Side Panel */}
			<div className={`absolute top-0 left-0 h-full shadow-sm shadow-gray-900/50 w-72 bg-[#292929]  z-10 transform transition-transform duration-300 ease-in-out
				${panelOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				{/* Panel Header */}
				<div className='p-4 flex items-center justify-between'>
					<span className='text-[#E8E8E8] text-md'>Settings</span>
					<button
						onClick={() => setPanelOpen(false)}
						className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#262626] transition-colors duration-200'
					>
						<IoClose className='w-5 h-5 text-[#E8E8E8]' />
					</button>
				</div>

				{/* Panel Items */}
				<div className='py-3 flex flex-col gap-1'>
					<LogoutButton asMenuItem />
				</div>
			</div>

		</div>
	);
};
export default Sidebar;






// STARTER CODE FOR THIS FILE
// import SearchInput from "./SearchInput";
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
//              <Conversations />
//              <LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;