import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyIceCream} from '../redux/iceCream/iceCreamActions'

function HookIceCreamContainer() {
  const numOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy ice cream</button>
    </div>
  )
}

export default HookIceCreamContainer
