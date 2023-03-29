import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@/context/AuthContext';
import Ambulance from '../public/ambulance.svg'
import { useRouter}  from "next/navigation";
import { useRef } from "react";



const Login = () => {
  const userNotFound = useRef(null);
  const passInvalid = useRef(null);
  const router = useRouter();
  const { login } = useAuth();
  const [data, setData] = useState( {
      email: '',
      password: '',
  })

  const handleLogin = async (e) => {
    e.preventDefault();
      try {
        await login(data.email, data.password)   
          router.push('/homepage')
      } catch (error){
        const errorCode = error.code
        if (errorCode === 'auth/user-not-found'){
          userNotFound.current.classList.replace('hide-invalid-user', 'show-invalid-user')
        }if (errorCode === 'auth/wrong-password') {
          passInvalid.current.classList.replace('hide-invalid-user', 'show-invalid-user')
        } 
      } 
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col lg:flex-row  items-center lg:justify-evenly justify-start px-6 py-10 mx-auto sm:h-screen lg:py-0">
    <Image
      priority
      src={Ambulance}
      alt="Ambulance"
      className='w-full sm:max-w-md xl:p-0 md:block'
    />
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label 
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="email" >Your email</label>
                      <input 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="email" 
                      name="email" 
                      id="email"  
                      placeholder="name@email.com" 
                      required=""
                      onChange={(e)=>setData({
                        ...data,
                        email: e.target.value
                      })}/>
                  </div>
                  <p className="hide-invalid-user" ref={userNotFound}>User not found!</p>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password" 
                      name="password" 
                      id="password"
                      placeholder=""             
                      required=""
                      onChange={(e)=>setData({
                        ...data,
                        password: e.target.value
                      })} />
                  </div>
                  <p className="hide-invalid-user" ref={passInvalid}>Invalid Password</p>
                  <div className="flex items-center">                 
                      <a href="/forgetpass" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button 
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                  onClick={handleLogin} 
                  >Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet? 
                    <Link href="./signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

)};

export default Login;