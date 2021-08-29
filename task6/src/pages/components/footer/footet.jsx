
import React from 'react'
import {Link,Switch,BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Nba from '../../NBA/nba'
import Cba from '../../CBA/cba'
import Football from '../../football/football'
import Game from '../../game/game'
import './footer.css'
function Footer() {
    return (
        
        <div className='footer'>
        <Router>
          <div id='warp1'>
        
                <div id='bq1'>
                    
                    <div className='Gradual'>新闻版块</div>
                    {/* 内容板块 */}
                    
                    <div className='Leftnav_content'><Link  to='/football' className='link' >足球资讯</Link></div>
                    <div className='Leftnav_content'> <Link to='/nba' className='link' >NBA资讯</Link></div>
                    <div className='Leftnav_content'><Link to='/cba'  className='link'>CBA资讯</Link></div>
                    <div className='Leftnav_content'><Link to='/game' className='link' >电竞资讯</Link></div>
                    
                </div>
               
            </div>
            {/* 显示版块 */}
      
            <div id='warp2'>
                <Switch>
                  <Route path='/nba' component={Nba} ></Route>
                  <Route path='/cba' component={Cba}></Route>
                  <Route path='/football' component={Football} ></Route>
                  <Route path='/game' component={Game} ></Route>
                  <Redirect to='/football' ></Redirect>
                </Switch>
            </div>
            </Router>
        </div>

    )
}

export default Footer
