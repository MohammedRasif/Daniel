import React from 'react'

export default function TitleSection({text,children}) {
  return (
    <div className='w-full'>
        <div className='text-[#374055] text-xl'>
            {text}
        </div>
        <div className='py-4 flex items-center'>
            {children}
        </div>
    </div>
  )
}
