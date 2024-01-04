import { styles } from "@/app/styles/style";
import React, { FC, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import toast from "react-hot-toast";

type Props = {
  active: number;
  setActive: (active: number) => void;
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
};

const CourseData: FC<Props> = ({
  active,
  setActive,
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddprerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields for go to next!");
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the benefits for student in this course?
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Benefit"
            placeholder=""
            required
            className={`${styles.input} my-2`}
            value={benefit.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <AddCircleIcon
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefit}
          className="fill-black dark:fill-white"
        />
      </div>
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the prerequisites for starting this course?
        </label>
        <br />
        {prerequisites.map((prerequisites: any, index: number) => (
          <input
            type="text"
            key={index}
            name="prerequisites"
            placeholder=""
            required
            className={`${styles.input} my-2`}
            value={prerequisites.title}
            onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
          />
        ))}
        <AddCircleIcon
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddprerequisites}
          className="fill-black dark:fill-white"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          onClick={() => prevButton()}
          className="w-[150px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-white rounded mt-8 cursor-pointer"
        >
          Prev
        </div>
        <div
          onClick={() => handleOptions()}
          className="w-[150px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-white rounded mt-8 cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseData;
