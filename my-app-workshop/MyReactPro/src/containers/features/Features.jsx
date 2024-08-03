import React, { useContext, useEffect, useLayoutEffect, useMemo, useState, useCallback } from 'react'
import ThemeContext from '../../components/hooks/themeContext'
import Child from './child'
// import useFilter from '../../components/hooks/useFilter'

// const useFilter = (items = []) => {
//   const [item, setItem] = useState(items)
//   const itemChange = useCallback((name) => {
//     console.log(name)
//     setItem(items.filter((i) => i.name == name))
//   })
//   return [item, itemChange]
// }
const Features = () => {
  const { session, setSession } = useContext(ThemeContext)
  // const nameList = [
  //   { id: 1, name: 'Mian Song' },
  //   { id: 2, name: 'Henry Song' },
  //   { id: 3, name: 'Cathy Song' }
  // ]

  // const [item, itemChange] = useFilter(nameList)

  useEffect(() => {
    console.log('parent rendered!')
    console.log('useEffect trigger!')
  }, [session])

  //use layoutEffect trigger before use
  useLayoutEffect(() => {
    console.log('useLayoutEffect trigger!')
  }, [session])

  const [otherState, setOtherState] = useState(0)
  const handleClick = () => {
    console.log(session)
    setSession({ ...session, token: 'New value' })
  }

  //preventing render the child everytime when parent rendered
  const memorized = useMemo(() => {
    return <Child></Child>
  }, [otherState])

  return (
    <div>
      {/* <Child></Child> */}
      {memorized}
      <p>Auth token is: {session.token}</p>
      <button onClick={handleClick}>Click for new Session</button>
      <button onClick={() => setOtherState(otherState + 1)}>Click for Other state</button>
    </div>
  )
}

export default Features
