import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
      <button onClick={()=>{
        dispatch(incrementBy(132))
      }}>
        Increment By Default
      </button>
    </div>
  )
}

export default App