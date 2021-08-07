import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CounterLabel from './componets/CounterLabel'
import CountButton from './componets/CountButton'
import useSWR from 'swr'

export default function Home() {
  const {data: count} = useSWR('count')
  return (
    <>
      <h1>counter app {count || 0}</h1>
    <CounterLabel />
    <CountButton />
    </>
  )
}
