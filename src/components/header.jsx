import React from 'react'
import Group from '../images/Group.svg'

function Header(){
  return (
    <div className="header">
      <h1 className="page-title">Home</h1>
      <img src={Group} alt="top tweets" className="top-tweets"/>
    </div>
  )
}


export default Header