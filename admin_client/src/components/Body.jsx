import React from 'react'
import DataCard from './DataCard'

const Body = () => {
  return (
    <div className='flex justify-center'>
        <DataCard value="500" description="Job Notifications"/>
        <DataCard value="300" description="Companies Registered"/>
        <DataCard value="200" description="Internship Notifications"/>
    </div>
  )
}

export default Body