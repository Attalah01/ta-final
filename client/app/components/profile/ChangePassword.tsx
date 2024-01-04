import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, {isSuccess, error}] = useUpdatePasswordMutation()
  // const [show,setShow] = useState(false)

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault()
    if(newPassword !== confirmPassword){
        toast.error("Password does not match")
    } else {
        await updatePassword({oldPassword,newPassword})
    }
  };

  useEffect(() => {
    if(isSuccess){
        toast.success("Password changed successfully")
    }
    if(error){
        if("data" in error){
            const errorData = error as any
            toast.error(errorData.data.message)
        }
    }
  }, [isSuccess,error])

  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] dark:text-white text-black pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className="w-[100%] 800px:w-[60%] mt-5">
            <label className="block pb-2 dark:text-white text-black">
              Enter your old password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            {/* {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer fill-black dark:fill-white"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer fill-black dark:fill-white"
              size={20}
              onClick={() => setShow(false)}
            />
          )} */}
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-2">
            <label className="block pb-2 dark:text-white text-black">
              Enter your new password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-2">
            <label className="block pb-2 dark:text-white text-black">
              Enter your confirm password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Update"
              required
              className={`w-[95%] h-[40px] border border-[#37a39a] text-center dark:text-white text-black rounded-[3px] mt-8 cursor-pointer`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;