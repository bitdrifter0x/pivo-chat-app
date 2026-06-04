import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
// Uncomment the line below if your logo is inside the src/assets folder:
// import logo3 from "../../assets/logo3.png"; 

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center mx-auto fn-sans min-h-screen'>
            {/* Main Card Element - Width strictly locked to 480px */}
            <div className='w-[480px] p-8 rounded-2xl bg-[#1C1C1C] border border-neutral-800 shadow-2xl'>
                
                {/* Header Logo & Title */}
                <div className="flex flex-col items-center mb-8">
                    {/* Swapped out react-icons block for your actual app logo asset */}
                    <img 
                        src="/logo34.png" 
                        alt="Pivo Chat Logo" 
                        className='w-14 h-14 rounded-xl object-cover mb-4 shadow-md'
                    />
                    <h1 className="text-3xl font-bold text-[#E8E8E8] tracking-tight">
                        Welcome back
                    </h1>
                    <p className="mt-1.5 text-sm text-neutral-400 font-medium">
                        Sign in to <span className="text-[#65BCA1] font-semibold">Pivo Chat</span>
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Username Input Group */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                            Username
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-500 group-focus-within:text-[#65BCA1] transition-colors duration-200">
                                <FiUser size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter username"
                                className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#1C1C1C] border border-neutral-800 text-[#E8E8E8] placeholder-neutral-600 focus:outline-none focus:border-[#65BCA1] focus:ring-1 focus:ring-[#65BCA1] transition-all duration-200"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input Group */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-500 group-focus-within:text-[#65BCA1] transition-colors duration-200">
                                <FiLock size={18} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className="w-full h-12 pl-11 pr-12 rounded-xl bg-[#1C1C1C] border border-neutral-800 text-[#E8E8E8] placeholder-neutral-600 focus:outline-none focus:border-[#65BCA1] focus:ring-1 focus:ring-[#65BCA1] transition-all duration-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                            >
                                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-[#65BCA1] text-[#1C1C1C] font-semibold tracking-wide hover:bg-[#54a88f] active:scale-[0.99] transition-all duration-200 flex items-center justify-center shadow-lg shadow-[#65BCA1]/10 disabled:opacity-50 disabled:pointer-events-none"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-[#1C1C1C] border-t-transparent rounded-full animate-spin"></span>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </div>

                    {/* Navigation Link */}
                    <div className="text-center pt-2">
                        <span className="text-sm text-neutral-400">Don't have an account? </span>
                        <Link 
                            to="/signup" 
                            className="text-sm font-semibold text-[#65BCA1] hover:underline hover:text-[#54a88f] transition-colors duration-150"
                        >
                            Sign up
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;












// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;