import React from 'react'
import Herosection from './Herosection'
import Trusted from './Trusted'

const Home = () => {
  const myData = {
    name: 'Your trusted partner  for compliance businees need',
  }

  return (
    <div>
      <Herosection myData={myData} />
      <Trusted/>
    </div>
  )
}

export default Home
