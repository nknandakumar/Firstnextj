import Link from 'next/link'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>PROJECTS DETAILS PAGE </h1>
        <Link className=' cursor-pointer text-4xl border border-white rounded-full p-10  m-20' href="/projects" >BAck</Link>
        {children}
    </div>
  )
}

export default layout