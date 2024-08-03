import React, { useEffect } from 'react'

const Child = () => {
  useEffect(() => {
    console.log('child rendered!')
  })
  return (
    <div>
      <child>1231231231233</child>
      <div>this is a child</div>
    </div>
  )
}

export default Child
