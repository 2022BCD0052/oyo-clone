import Footer from '@/components/Footer';
import Header1 from '@/components/Header1';
import Hotels_sidebar from '@/components/Hotels_sidebar';
import Hotel from '@/components/hotel';
import HotelsRightBar from '@/components/hotelsRightBar';
import styles from '@/styles/Layout.module.css'

import React from 'react'
const Hotels = () => {
  return (

    // <div className='className="flex  top-12 relative '>
<> 

<Header1/>
    
  <div className={styles.container} >


      <div className={styles.leftSidebar}>
        {/* Content for left sidebar */}
        <Hotels_sidebar />

      </div>
      <div className={styles.rightSidebar}>
        {/* Content for right sidebar */}
        <HotelsRightBar />

      </div>


      {/* </div> */}
    </div>

    <Footer/>
</>

 
  )
}

export default Hotels;