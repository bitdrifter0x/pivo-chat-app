import useLogout from "../../hooks/useLogout";

const LogoutButton = ({ asMenuItem = false }) => {
	const { loading, logout } = useLogout();

	if (asMenuItem) {
		return (
			<button
				onClick={logout}
				className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#262626] text-[#E8E8E8] transition-colors duration-200'
			>
				{loading ? (
					<span className='loading loading-spinner w-4 h-4 text-[#65BCA1]'></span>
				) : (
					<span className='text-sm'>Logout</span>
				)}
			</button>
		);
	}
};
export default LogoutButton;
