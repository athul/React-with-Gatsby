import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User=props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p classNmae={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>   
)
export default()=>(
    <Container>
        <h1>About Aloy Annan</h1>
        <p>Aloy Uyir</p>
        <User 
            username="Aloy Annan"
            avatar="https://qph.fs.quoracdn.net/main-qimg-78ae97e270237bec39aa2f416adde6cc"
            excerpt="i am Aloy .... Mess teste...theetham....."
        />
    </Container>
)