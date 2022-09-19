import React from 'react'
import { Patient, Stats } from '../components'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4  gap-4 mt-10'>
      
      <Stats
      title="Appointments"
      stats='345'
      icon='fa6-solid:briefcase-medical'
      iconColor='text-blue-400'
      iconBackground='bg-blue-200'
      textColor='text-blue-400'
      />
      
      <Stats
      title="Hospital Earnings"
      stats='$12,546'
      icon='healthicons:money-bag'
      iconColor='text-orange-400'
      iconBackground='bg-orange-200'
      textColor='text-orange-400'
      />

<Stats
      title="New Patients"
      stats='788'
      icon='fa6-solid:person-walking-with-cane'
      iconColor='text-green-400'
      iconBackground='bg-green-200'
      textColor='text-green-400'
      />



<div className=" row-start- col-span-2 xl:col-span-1 xl:col-start-4 x
">
<Patient />
</div>
    </div>
  )
}

export default Dashboard