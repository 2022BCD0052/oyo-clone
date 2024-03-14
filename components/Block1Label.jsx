import React from 'react'
const Blocks = ({ para }) => {
    return (


        <div className='pb-3 font-medium flex  items-center'>
            <input type="checkbox" name="OYOs welcome couples" id="oyos_couples" className="mr-3 w-4 h-6 text-blue-600 focus:ring-blue-500  bg-red-400 " />
            <label for="oyos_couples" className='' >{para} </label><br />
        </div>


    )
}

export default Blocks