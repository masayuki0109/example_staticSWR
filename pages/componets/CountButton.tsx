import useSWR from "swr"

export default function CountButton () {
  const {data:count, mutate: setCount} = useSWR('count', null)
  return (
    <button onClick={() => setCount((count !| 0) + 1)} >count up</button>
  )
};