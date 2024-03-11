import React from 'react'

const Header2 = () => {
    const list=[
        {name:"delhi"},
        {name:"mumbai"},
        {name:"pune"},
        {name:"bangalore"},
        {name:"hyderabad"},
        {name:"chennai"},
        {name:"kolkata"},
        {name:"ahmedabad"},
        {name:"jaipur"},
       
    ]
  return (
    <div className='px-16  bg-gray-100'>
        <div className='flex px-10  py-2  justify-between '>
            {
                list.map((item,index)=>{
                    return(
                        <span key={index.name} className=''>
                           { item.name}
                        </span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Header2