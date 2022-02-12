import React from 'react'
import { useNavigate } from 'react-router-dom' // v6

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, id, size, linkUrl }) => {
  const navigate = useNavigate() // v6

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
