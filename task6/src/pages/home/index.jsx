import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import './index.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footet'
import Content from '../components/content/content'

function Index() {

 


    return (
        <div className='home'>
         <Header/>
         <Content />
         <Footer />
         
        </div>
    )
}

export default Index
