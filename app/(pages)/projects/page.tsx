import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div  className=' h-[100vh] flex justify-center items-center'>projects
        <br/>
        <ol>
				<li>
					<Link href={"/project/1"}>users 1 </Link>
				</li>
				<li>
					<Link href={"/project/2"}>users 2 </Link>
				</li>

				<li>
					<Link href={"/project/3"}>users 3 </Link>
				</li>
				<li>
					<Link href={"/project/4"}>users 4 </Link>
				</li>
				<li>
					<Link href={"/project/5"}>users 5 </Link>
				</li>
			</ol>
    </div>

    
    </>
  )
}

export default page