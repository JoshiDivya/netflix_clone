import Input from "@/components/Input";
import axios from "axios";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [variant,setVariant] = useState("login");

  const toggleVariant = useCallback(()=>{
    setVariant(currentvariant => currentvariant=== "login" ? "register" : "login")
  },[])

  const register = useCallback(async()=>{
try {
  await axios.post('/api/register',{
    email,
    name,
    password
  })
} catch (error) {
  console.error(error);
  
}
  },[]);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            width={100}
            height={100}
            alt="logo"
            src="/images/logo.png"
          ></Image>
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h1 className="text-white text-4xl mb-8">{variant === 'login' ? 'Sign In' : 'Register'}</h1>
            <div className="flex flex-col gap-4">
            {variant=== 'login' && (
           <Input
                label="username"
                onChange={(e: any) => {
                  setUserName(e.target.value);
                }}
                value={userName}
                id="username"
              />
            )} 
              <Input
                label="email"
                type="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                value={email}
                id="email"
              />
              <Input
                label="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                type="password"
                value={password}
                id="password"
              />
            </div>
            <button className="bg-red-600 w-full mt-10 text-white text-center rounded-md py-2 hover:bg-red-700 transition">
            {variant=== 'login' ? ' Sign In' : 'Register'} 
            </button>
            <p className="text-neutral-500 mt-12">
            {variant=== 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover: underline cursor-pointer">
              {variant=== 'login' ?' Create an account?' : 'Login here'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
