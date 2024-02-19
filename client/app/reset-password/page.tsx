'use client'
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNewPasswordMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import { styles } from "../styles/style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { redirect } from "next/navigation";


type Props = {};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  newPassword: Yup.string().required("Please enter your password!").min(6),
});
const page = (props: Props) => {

    const [updatePassword, {data,isSuccess,error}] = useNewPasswordMutation()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if(isSuccess){
            toast.success("Password updated successfully")
            setLoading(false)
            redirect("/")
        }
        if(error){
            if("data" in error){
              const errorData = error as any;
              toast.error(errorData.data.message);
            }
           }
    }, [error,isSuccess])

    const formik = useFormik({
        initialValues: { email: "", newPassword: "" },
        validationSchema: schema,
        onSubmit: async ({email, newPassword }) => {
          const data = {
            email,newPassword
          };
          await updatePassword(data);
        },
      });

      const { errors, touched, values, handleChange, handleSubmit } = formik;

      console.log(handleSubmit)
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className={`${styles.title}`}>Reset Password</h1>
        <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type={!show ? "newPassword" : "text"}
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            id="newPassword"
            placeholder="password!@%"
            className={`${
              errors.newPassword && touched.newPassword && "border-red-500"
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        {errors.newPassword && touched.newPassword && (
          <span className="text-red-500 pt-2 block">{errors.newPassword}</span>
        )}
        <div className="w-full mt-5">
            {loading ? <input type="submit" value="Loading..." className={`${styles.button}`} /> : <input type="submit" value="Reset Password" className={`${styles.button}`} />}
        </div>
        </form>
    </div>
  )
};

export default page;
