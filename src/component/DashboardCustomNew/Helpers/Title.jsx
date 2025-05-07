import React from 'react'

export default function Title({text, className}) {
  return (
    <div className='w-full flex items-center justify-center text-[#374055] noto text-2xl py-4'>
      <h1 className={`${className}`}>{text}</h1>
    </div>
  )
}
