import { useSharedState } from "../hooks/useSharedState"

export default function CountButton () {
  const [count, setCount] = useSharedState('count', 0)
  return (
    <button onClick={() => setCount(count  + 1)} >count up</button>
  )
};