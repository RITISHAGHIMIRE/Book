import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recommended from './Recommended'
import News from './News'
import Login from '../../components/Login'

const Home = () => {
  return (
    <>
    <Banner/>
    <TopSeller/>
    <Recommended/>
    <News/>

    </>
  )
}

export default Home