import React, { useReducer, useState } from 'react'

const Blog = () => {
  const initState = {
    counter: 0
  }

  const [count, setCount] = useState(initState.counter)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        // return { counter: state.counter + 1 }
        return setCount(count + 1)

      case 'decrease':
        // return { counter: state.counter - 1 }
        return setCount(count - 1)

      default:
        return initState.counter
    }
  }
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
      {/* <p>Count: {state.counter}</p> */}
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increase' })}>+++++</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>-----</button>
    </div>
  )
}

export default Blog
