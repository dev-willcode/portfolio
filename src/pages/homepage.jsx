import React from 'react'
import CurrentlyReading from '../components/CurrentlyReading'
import Layout from '../containers/layout'

const Home = () => {
  return (
    <Layout header={'Home'}>
      <CurrentlyReading />
    </Layout>
  )
}

export default Home
