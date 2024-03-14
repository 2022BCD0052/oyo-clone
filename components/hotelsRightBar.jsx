import React from 'react'
import Hotel from './hotel';

const HotelsRightBar = () => {
  return (
    <div className='px-4 pb-5 '>
      <div className='flex justify-between py-4 mb-9 border-b  '>
        <p className='font-bold text-3xl'>Top 324 Hotels in India</p>
        <select name="items" id="items" class="block w-[20%] max-w-xs border  shadow-sm border-gray-400 rounded-sm bg-white text-gray-800 font-medium py-3 px-4">
          <option value="item1" class="py-2 px-4 p-4">Item 1</option>
          <option value="item2" class="py-2">Item 2</option>
          <option value="item3" class="py-2">Item 3</option>
          <option value="item4" class="py-2">Item 4</option>
          <option value="item5" class="py-2">Item 5</option>
          <option value="item6" class="py-2">Item 6</option>
          <option value="item7" class="py-2">Item 7</option>
          <option value="item8" class="py-2">Item 8</option>
          <option value="item9" class="py-2">Item 9</option>
          <option value="item10" class="py-2">Item 10</option>
        </select>
      </div>
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />

    </div>
  )
}

export default HotelsRightBar;