import React from 'react'
import Component2 from './Component2'

const Component1 = () => {
  return (
    <div className='box' style={{width:'200px',height:'200px',border:'2px solid black'}}>
      <Component2/>
    </div>
  )
}

export default Component1
