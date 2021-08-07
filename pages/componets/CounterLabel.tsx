import useSWR from "swr";

export default function CounterLabel() {
  const { data: count } = useSWR('count', null, {
    initialData: 0
  })
  return <h1>now count is {count} </h1> 
}