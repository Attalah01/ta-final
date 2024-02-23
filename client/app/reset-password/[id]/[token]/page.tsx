'use client'
import { redirect,useRouter  } from 'next/navigation';
import { useNewPasswordMutation, useSendResetPasswordEmailMutation } from '../../../../redux/features/user/userApi'
import React, { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaArrowLeft } from "react-icons/fa";
import { styles } from '@/app/styles/style';
import Link from 'next/link';
import axios from 'axios';
import { useParams } from 'next/navigation';
import {useNavigate} from 'react-router-dom'

type Props = {
}

const page = () => {

  const [newPassword, {isSuccess, error}] = useNewPasswordMutation()
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const {id, token}:any = useParams()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if(isSuccess){
  //     toast.success("Password updated successfully")
  //     setPassword("")
  //   }
  //   if(error){
  //     if("data" in error){
  //       const errorData = error as any;
  //       toast.error(errorData.data.message);
  //     }
  //   }
  // }, [])

  const updatePasswordHandler = (e:any) => {
    e.preventDefault()
    if(password.length < 6){
      toast.error("password must be at least 6 characters")
    }
    if(password.length >=6 ){
    axios.post(`http://localhost:8000/api/v1/new-password/${id}/${token}`, {password})
    .then(res => {
      if(res.status === 201){
        toast.success("password updated successfully")
      }
    })
    
    .catch(err => console.log(err))
    setPassword("")
  }
  }

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] m-auto  800px:w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
      <div className="mb-6">
        <Link
          href={"/"}
          className="text-gray-500 hover:text-gray-700 focus:outline-none flex justify-start cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </Link>
        <h1 className={`${styles.title}`}>Reset Password</h1>
      </div>
      <form onSubmit={updatePasswordHandler}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your new password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="qwerty"
          className={`${styles.input}`}
        />
        <div className="w-full mt-5">
          {loading ? (
            <input
              type="submit"
              value="Loading..."
              className={`${styles.button}`}
            />
          ) : (
            <input
              type="submit"
              value="Submit Password"
              className={`${styles.button}`}
            />
          )}
        </div>
      </form>
    </div>
  )
}

export default page