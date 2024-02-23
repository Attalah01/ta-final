"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNewPasswordMutation, useSendResetPasswordEmailMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import { styles } from "../../styles/style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { redirect } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const Reset: FC<Props> = ({ setOpen, setRoute }) => {
  const [sentEmail, { data, isSuccess, error }] = useSendResetPasswordEmailMutation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("")

  useEffect(() => {
    if(isSuccess){
      toast.success("Email sent")
      setEmail("")
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess,error])

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    await sentEmail({email})
  }
  return (
    <div className="w-full">
      <div className="mb-6">
        <span
          onClick={() => setRoute("Login")}
          className="text-gray-500 hover:text-gray-700 focus:outline-none flex justify-start cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </span>
        <h1 className={`${styles.title}`}>Reset Password</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="loginmail@gmail.com"
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
              value="Sent Email"
              className={`${styles.button}`}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Reset;
