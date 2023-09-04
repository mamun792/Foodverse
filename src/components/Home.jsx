import React from 'react'

export default function Home({data,error,loading}) {
  return (
    <div className=' text-red-900 text-center'>
     {
      data?.map(item=>(
        <li key={item.recipe_id}
        >{item.title}</li>
      ))
     }
    </div>
  )
}
