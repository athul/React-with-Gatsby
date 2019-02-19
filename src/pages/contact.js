import React from 'react'
import {Link} from 'gatsby'
import Header from '../components/header'
export default()=>(
    <div style={{color:"Teal"}}>
    <Link to="/"> Home </Link>
    <Header headerText="Even Exported Content"/>
    <img src="https://raw.githubusercontent.com/cek-open-source-club/Project-Libra/views/assets/shelf1.png" alt=""/> 
    </div>
)