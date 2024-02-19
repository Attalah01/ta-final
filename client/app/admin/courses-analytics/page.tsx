'use client'
import React from 'react'
import AdminSidebar from "../../components/admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import CourseAnalytics from "../../components/admin/Analytics/CourseAnalytics";
import DashboardHeader from '../../../app/components/admin/DashboardHeader';
import AdminProtected from '../../../app/hooks/adminProtected';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
         title="Aodemy - Admin"
         description="Aodemy is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <CourseAnalytics />
            </div>
        </div>
        </AdminProtected>
    </div>
  )
}

export default page