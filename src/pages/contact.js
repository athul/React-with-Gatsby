import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
export default()=>(
    <div style={{color:"Teal"}}>
    <Layout>
    <Link to="/"> Home </Link>
    <Link to="/about">&nbsp;&nbsp;&nbsp;&nbsp;About</Link>
    <Header headerText="Pooy...Setta...."/>
    <p>Eda mwone Dence Keli.....</p>
    <h3>Aloy is Uyir....</h3>
    <img src="https://qph.fs.quoracdn.net/main-qimg-cc0ed817575e52dde27ae3f49db5aefe" height="400" width="400" alt=""/> 
    </Layout>
    </div>
)