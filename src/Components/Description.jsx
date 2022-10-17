import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
const DescriptionText = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Paragraph = styled.h1`
    text-align: center;
    font-weight: 300;
    line-height: 1.8;
    letter-spacing: 3px;
    margin: 0 30px;
    ${mobile({letterSpacing:'2px',})}
`

const Description = () => {
  return (
    <Container id='about'>
        <DescriptionText>
            <Paragraph><p>Hi! I am Paul and into digital product design and web development. I specialize in <span style={{fontWeight:'700', borderBottom:'1px solid red'}}>MERN stack development</span> and <span style={{fontWeight:'700', borderBottom:'1px solid red'}}>UX/UI design</span>.</p> <p>Currently, I am working on a project that would <span style={{fontWeight:'700', borderBottom:'1px solid red'}}>redefine how we source the news</span>.</p></Paragraph>
        </DescriptionText>
    </Container>
  )
}

export default Description