import type { NextPage } from 'next'
import Head from 'next/head'

// import containers
import {Dashboard}  from '../containers'
// import components
import { Navbar, Sidebar } from "../components";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>M.Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<Sidebar/>
<Navbar/>
<Dashboard/>

    </div>
  )
}

export default Home
