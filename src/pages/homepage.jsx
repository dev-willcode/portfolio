import React from 'react'
import Layout from '../containers/layout'
import CurrentlyReading from '../components/CurrentlyReading'
import '../styles/homepage.module.css'

const Home = () => {
  return (
    <Layout header={'Home'}>
      <CurrentlyReading />
    </Layout>
  )
}

export default Home
