import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import logo from './photo/new.png'
import './header.css'


function Header() {
  
    return (
    
                <div id="head_background">
                    <header>
                        <div id="left_logo">
                        <img src={logo} alt="err" id="logo"/>
                            <span id="title">体育资讯</span>
                        </div>
                       
                    </header>
            </div>
    )
      
    
       
    
}

export default Header
