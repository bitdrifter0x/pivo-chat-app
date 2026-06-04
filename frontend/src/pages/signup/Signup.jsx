import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center mx-auto fn-sans min-h-screen'>
            {/* Main Card Element - Width strictly locked to 480px */}
            <div className='w-[480px] p-8 rounded-2xl bg-[#1C1C1C] border border-neutral-800 shadow-2xl'>
                
                {/* Header App Icon & Title */}
                <div className='flex flex-col items-center mb-6'>
                    {/* Your custom app logo from logo3.png */}
                    <img 
                        src="/logo34.png" 
                        alt="Pivo Chat Logo" 
                        className='w-14 h-14 rounded-xl object-cover mb-4 shadow-md'
                    />
                    <h1 className='text-2xl font-semibold text-center text-[#E8E8E8] tracking-tight'>
                        Create an account
                    </h1>
                    <p className='text-sm text-neutral-500 mt-1'>
                        Get started with <span className='text-[#65BCA1] font-medium'>Pivo Chat</span>
                    </p>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name input block */}
                    <div>
                        <label className='block text-sm font-medium text-neutral-400 mb-1.5'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            placeholder='Enter full name'
                            className='w-full px-3.5 py-2 rounded-lg bg-[#262626] border border-neutral-800 text-[#E8E8E8] placeholder-neutral-600 outline-none focus:border-[#65BCA1] transition duration-200'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    {/* Username input block */}
                    <div>
                        <label className='block text-sm font-medium text-neutral-400 mb-1.5'>
                            Username
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full px-3.5 py-2 rounded-lg bg-[#262626] border border-neutral-800 text-[#E8E8E8] placeholder-neutral-600 outline-none focus:border-[#65BCA1] transition duration-200'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    {/* Password input block */}
                    <div>
                        <label className='block text-sm font-medium text-neutral-400 mb-1.5'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='w-full px-3.5 py-2 rounded-lg bg-[#262626] border border-neutral-800 text-[#E8E8E8] placeholder-neutral-600 outline-none focus:border-[#65BCA1] transition duration-200'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    {/* Confirm Password input block */}
                    <div>
                        <label className='block text-sm font-medium text-neutral-400 mb-1.5'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm password'
                            className='w-full px-3.5 py-2 rounded-lg bg-[#262626] border border-neutral-800 text-[#E8E8E8] placeholder-neutral-600 outline-none focus:border-[#65BCA1] transition duration-200'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button 
                            className='w-full py-2.5 bg-[#65BCA1] text-[#1C1C1C] font-semibold rounded-lg hover:bg-[#54a68d] transition duration-200 disabled:opacity-50 flex items-center justify-center text-base' 
                            disabled={loading}
                        >
                            {loading ? <span className='w-5 h-5 border-2 border-[#1C1C1C] border-t-transparent rounded-full animate-spin'></span> : "Sign Up"}
                        </button>
                    </div>

                    {/* Navigation Link to Login Page */}
                    <div className='text-center text-sm text-neutral-500 pt-2'>
                        Already have an account?{" "}
                        <Link to="/login" className='text-[#65BCA1] hover:underline font-medium ml-0.5'>
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;







 // STARTER CODE FOR THE SIGNUP COMPONENT

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='Arvind Sahani' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='arvindk25' className='w-full input input-bordered h-10' />
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

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					 {/* CHECK BOX WILL BE GOING HERE */}
//                      <GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;