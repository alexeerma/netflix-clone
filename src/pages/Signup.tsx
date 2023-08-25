import { FC, useState, FormEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../provider/AuthProvider";



export interface SignUpFormValues {
    email: string,
    password: string,
    error: string,
  }


const SignUp: FC<SignUpFormValues> = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const {user, signUp} = useAuth();
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await signUp( email, password);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };
    
  return (
    <>
      <div className='w-full h-screen'>
        <img 
        className='hidden sm:block absolute w-full h-full object-cover' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        alt="/" 
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto rounded-xl bg-black/75 opacity-90 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-14'>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 my-2 bg-gray-700 rounded'
                            type="email" 
                            placeholder='Email' 
                            autoComplete='email'
                            />
                        <input
                            onChange={(e) => setPassword(e.target.value)} 
                            className='p-3 my-2 bg-gray-700 rounded'
                            type="password" 
                            placeholder='Password' 
                            autoComplete='current-password'
                            />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-800'>Sign Up</button>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm text-gray-500'><input className='mr-2' type="checkbox" />
                                Remember me
                                </p>
                                <p className='text-sm text-gray-500 hover:underline'><a href="/">Need help?</a></p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-500 mr-2'>
                                    Already subscribed to Netflix?
                                </span> {''}                                   
                                <Link to='/login'>Sign In</Link>
                            </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;