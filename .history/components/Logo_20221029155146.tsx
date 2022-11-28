import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image 
        src='/images/logo.png'
        alt="Dry Cleaners"
        width={150}
        height={75} 
      />
    </div>
  )
}

export default Logo