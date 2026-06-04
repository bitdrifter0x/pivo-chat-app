import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
	return (
		<div className='flex w-full h-full overflow-hidden bg-[#1C1C1C]'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;