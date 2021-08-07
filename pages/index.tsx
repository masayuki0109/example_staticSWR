import CounterLabel from './componets/CounterLabel'
import CountButton from './componets/CountButton'
import { useSharedState } from './hooks/useSharedState'

export default function Home() {
  const [count] = useSharedState('count', 0)
  return (
    <>
      <h1>counter app {count || 0}</h1>
    <CounterLabel />
    <CountButton />
    </>
  )
}
