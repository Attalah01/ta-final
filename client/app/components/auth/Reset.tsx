'use client'
import { redirect } from 'next/navigation';
import { useSendResetPasswordEmailMutation } from '../../../redux/features/user/userApi'
import React, { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaArrowLeft } from "react-icons/fa";
import { styles } from '@/app/styles/style';

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
}

const Reset:FC<Props> = ({setRoute, setOpen}) => {

  const [email, setEmail] = useState("")
  const [data, {isSuccess, error}] = useSendResetPasswordEmailMutation()
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await data({email})
  }

  useEffect(() => {
    // const successToast = toast.loading("Sending reset password email...")
    if(isSuccess){
      toast.success("Please check your email!")
      setLoading(false)
      setEmail("")
      redirect("/")
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
    // return () => {
    //   toast.dismiss(successToast)
    // }
  }, [isSuccess, error])

//   const handleBackToHome = () => {
//     redirect("/")
//   };

  return (
    // <div className="max-w-md mx-auto mt-8 px-4 py-6 bg-white shadow-md rounded-md">
    //   <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-4">
    //       <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={handleEmailChange}
    //         required
    //         className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       disabled={loading}
    //       className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    //     >
    //       {loading ? 'Sending...' : 'Send Reset Password Email'}
    //     </button>
    //   </form>
    // </div>

    <div className="w-full">
      <div className="rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md relative">
        {/* <button
          onClick={handleBackToHome}
          className="absolute top-0 left-0 mt-4 ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaArrowLeft size={20} />
        </button> */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl text-black dark:text-white">Reset Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="dark:bg-transparent shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder='Enter your email'
            />
          </div>
          <button
            className={`${styles.button} mt-5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Send Reset Password Email'}
          </button>
        </form>
          <div
            className={`${styles.button} mt-5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => setRoute("Login")}
          >
            Back To Login
          </div>
      </div>
    </div>
  )
}

export default Reset