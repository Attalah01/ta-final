'use client'
import DashboardHeader from '@/app/components/admin/DashboardHeader'
import CreateCourse from '@/app/components/admin/course/CreateCourse'
import AdminSidebar from '@/app/components/admin/sidebar/AdminSidebar'
import Heading from '@/app/utils/Heading'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
          title="Aodemy - Admin"
          description="Aodemy is a platform for students to learn and get help from teachers"
          keywords="Programming"
        />
        <div className="flex">
            <div className='1500px:w-[16%] w-1/5'>
                <AdminSidebar />
            </div>
            <div className='w-[85%]'>
                <DashboardHeader />
                <CreateCourse />
            </div>
        </div>
    </div>
  )
}

export default page