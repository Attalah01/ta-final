'use client'
import React from 'react'
import AdminSidebar from "../../components/admin/sidebar/AdminSidebar";
import Heading from '../../utils/Heading';
import DashboardHeader from '../../components/admin/DashboardHeader';
import UserAnalytics from '../../../app/components/admin/Analytics/UserAnalytics';
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
               <UserAnalytics />
            </div>
        </div>
        </AdminProtected>
    </div>
  )
}

export default page