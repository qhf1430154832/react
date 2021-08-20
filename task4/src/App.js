import './App.css';
import axios from 'axios'
import React, { useState,useEffect, Component} from 'react'





export default function App () {


  const [source,setSource]=useState([]);
  const[inputValue,setinputValue]=useState([]);


// 渲染界面
 useEffect(()=>{
  axios.get('http://47.113.187.45:8989/todo/index/selectAll').then(res=>{
       //设置source的值
      setSource(res.data.content)
  
     
  }).catch(err=>{
      console.log(err)
  })
},[])
 
 
  
  return (
    <div id='warp'>
    {/* 背景 */}
       <div className='content'>
      <div className='title' >Todos</div>
      {/* 标题 */}
     <div className='input-box'> 
    <input type='text'  className='input' value={inputValue}  onChange={(e)=> 
     setinputValue(e.target.value)
    } />
    <div type='submit' className='button' onClick={()=>{
      //清空输入框
          setinputValue('')
      // 增加内容
    axios.post(`http://47.113.187.45:8989/todo/index/create`,{msg:inputValue}).then(res=>{
      
      // 渲染界面
      axios.get('http://47.113.187.45:8989/todo/index/selectAll').then(res=>{
      //改变source的值
      setSource(res.data.content)
     
     
  }).catch(err=>{
      console.log(err)
  })
  
    }).catch(rea=>{
      console.log(rea)
    })
   }}>add</div>
   </div>
   {/* 输入栏 */}
   <div className='screen'>
   {
   
      source.map(item=>{
        return(
          <div  key={item.Id}  className='screen-item'>{item.Content}
         <div   className='cricle' onClick={(e)=>{ 
          //  删除对应ID内容
       axios.delete(`http://47.113.187.45:8989/todo/index/delete/${item.Id}`).then(res=>{
         console.log(res)
         // 渲染界面
         axios.get('http://47.113.187.45:8989/todo/index/selectAll').then(res=>{
      
        setSource(res.data.content)
  
     
        }).catch(err=>{
       console.log(err)
          })
       }).catch(rea=>{
         console.log(rea)
       })

     }
     
     
     
     }>   <div className='btn'></div></div> 
          </div>

        
        
          
        )
      })
      
     }
   </div>
   {/* 展示栏 */}
</div>
{/* 内容 */}
</div>
  )
    
}
