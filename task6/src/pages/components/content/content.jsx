import React from 'react'
import './content.css'
import {Carousel} from 'antd'
import 'antd/dist/antd.css'
function Content() {
    const contentStyle = {
        height: '520px',
        lineHeight: '820px',
        textAlign: 'center',
        background: '#fff',
    };
      
    return (
        <div className='content'>
        <Carousel effect="fade" autoplay draggable  easing className='cos'>
            <div>
                <h3 style={contentStyle}><img src='https://wx4.sinaimg.cn/mw690/6cd00c37ly1gsgsta1ksmj22c0340u0x.jpg' alt="err" className="banner"/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src='https://wx2.sinaimg.cn/mw690/6cd00c37gy1gp4s8vvurvj20sg0izgny.jpg' alt="err" className="banner"/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src='https://wx3.sinaimg.cn/mw690/00244AjRly1gtwfa742dvj62yo1z4npe02.jpg' alt="err" className="banner" id="banner3"/></h3>
            </div>
        </Carousel>

    </div>
    )
}

export default Content
