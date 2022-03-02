import React from 'react'

const MissionCard = ({ mission }) => {
  return (
    <div className='flex w-1/4 p-10 m-5 font-normal text-portal-blue rounded-lg bg-white/30 shadow-2xl'>
        {mission}
    </div>
  )
}

export default MissionCard