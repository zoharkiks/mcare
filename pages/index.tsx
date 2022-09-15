import type { NextPage } from 'next'
import Head from 'next/head'

// import containers
import {Dashboard}  from '../containers'
// import components
import { Navbar, Sidebar } from "../components";

const Home: NextPage = () => {
  return (
    <div className='grid grid-cols-12 p-4 bg-gray-100 h-screen font-poppins' >
      <Head>
        <title>M.Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<section className='hidden md:flex'>
<Sidebar/>
</section>
<section className='col-span-12 md:col-start-4 xl:col-start-3  '>
<Navbar/>
<Dashboard/>
</section>


    </div>
  )
}

export default Home
