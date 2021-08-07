import { useSharedState } from "../hooks/useSharedState";

export default function CounterLabel() {
  const [count] = useSharedState('count', 0)
  return <h1>now count is {count} </h1> 
}