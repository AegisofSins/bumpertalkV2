import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Ambulance from '../public/ambulance.svg'



const Login = () => {
  const [data, setData] = useState( {
      email: '',
      password: '',
  })

  const handleLogin = (e) => {
      e.preventDefault();
      console.log(data);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col lg:flex-row  items-center lg:justify-evenly justify-start px-6 py-8 mx-auto sm:h-screen lg:py-0">
    <Image
      src={Ambulance}
      alt="Picture of the author"
      className='w-full sm:max-w-md xl:p-0 hidden md:block'
    />
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
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
                      placeholder="name@bcehs.com" 
                      required=""
                      onChange={(e)=>setData({
                        ...data,
                        email: e.target.value
                      })}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="••••••••" 
                      required=""
                      onChange={(e)=>setData({
                        ...data,
                        password: e.target.value
                      })} />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label 
                            className="text-gray-500 dark:text-gray-300"
                            htmlFor="remember" >Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
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