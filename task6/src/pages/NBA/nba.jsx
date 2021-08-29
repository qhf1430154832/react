import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import './nba.css'

function Nba() {
    const [i,seti]=useState(0)
    const [news,setNews]=useState([1])
    useEffect(()=>{
      axios.get('http://api.tianapi.com/nba/index?key=e06b7e79f87dbc774e96f59c00c9e12e&num=10').then(res=>{
          console.log(res)
          setNews(res.data.newslist)
      }).catch(rea=>{
          console.log(rea)
      })
    },[])
    let timer=null
    const start=()=>{
        timer=  setInterval(()=>{
            seti(x=>x+1)
        },3000)
      }
      window.onload=()=>{
          start()
          setTimeout(()=>{
            clean()
        },27000)
      }
      const clean=()=>{
        clearInterval(timer)
        }

    return (
        <div>
            {
                news.map(item=>{
                    return(
                        <div key={item.id} className='warp'>
                     
                        <a href={item.url}  className='content-link'>{item.title}</a>
                       
                       
                        <span className='content-time'>{item.ctime}</span>
                      
                      
                     
                        </div>
                      

                    )
                })
            }
            <img alt='' src={news[i].picUrl} className='pic'  onClick={start} /> 
        </div>
    )
}

export default Nba
