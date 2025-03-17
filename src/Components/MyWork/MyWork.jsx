import React from 'react'
import './mywork.css'
import mywork from '../../assets/mywork'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
        </div>
        <div className='mywork-container'>
        {mywork.map((work, index)=>{
          return <img key={index} src={work.w_img} alt='' height='400px' width='400px' />
        })}
        </div>
    </div>
  )
}

export default MyWork