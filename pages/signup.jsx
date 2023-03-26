import Link from 'next/link';
import { useState } from 'react';
import Ambulance from '../public/ambulance.svg'
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';




const Signup = () => {
  const { user, signup } = useAuth();
  const [data, setData] = useState( {
    email: '',
    password: '',
    confPassword: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.password === data.confPassword && data.password.length > 6){
      try {
        await signup(data.email, data.password) 
      } catch (err){
        console.log(err);
      } 
    }else{
      console.log('Passwords don\'t work');
    }
  };
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row  items-center lg:justify-evenly justify-start px-6 py-10 mx-auto sm:h-screen lg:py-0">
        <Image
          src={Ambulance}
          alt="Ambulance"
          className='w-full sm:max-w-md xl:p-0 md:block'
        />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
             <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="email"
                name="email" 
                id="email" 
                placeholder="name@bcehs.com" 
                required=""
                onChange={(e) => 
                  setData(
                  {  ...data,
                  email: e.target.value
                  })
                }/>
            </div>
            <div>
              <label 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
              >Password</label>
              <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                 
              type="password" 
              name="password" 
              id="password"
              minLength="6"
              required=""
              onChange={(e) => 
                setData(
                {  ...data,
                password: e.target.value})
              }
              />
              <p className='text-sm'>Password must contain at least 6 characters</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              htmlFor="confirm-password"
              >Confirm password</label>
              <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              type="password" 
              name="confirm-password" 
              id="confirm-password"
              minLength="6" 
              required=""
              onChange={(e) => 
                setData(
                {  ...data,
                confPassword: e.target.value})
              }
              />
            </div>                 
            <button
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
            type="submit" 
            onClick= {handleSubmit}
            >Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? 
              <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              > Login here</Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
  


