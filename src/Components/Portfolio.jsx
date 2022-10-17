import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${mobile({width:'90vw', marginLeft:'35px', marginBottom:'-80px'})}
`
const ProjectsAnchor = styled.a`
  text-decoration: none;
  
`
const Ecommerce = styled.div`
  width: 550px;
  height: 500px;
  margin:20px 20px 50px 20px;
  ${mobile({marginTop:'10px', marginBottom:'10px', width:'95%'})}
`
const Justbuy = styled.div`
  width: 550px;
  height: 500px;
  margin: 20px 20px 50px 20px;
  ${mobile({margin:'10px, 0', width:'95%'})}
`
const CryptoRegister = styled.div`
  width: 550px;
  height: 500px;
  margin:20px 20px 50px 20px;
  ${mobile({margin:'10px, 0', width:'95%'})}
`
const WeatherApp = styled.div`
  width: 550px;
  height: 500px;
  margin:20px 20px 50px 20px;
  ${mobile({margin:'10px, 0', width:'95%'})}
`
const Keeper = styled.div`
  width: 550px;
  height: 500px;
  margin:20px 20px 50px 20px;
  ${mobile({margin:'10px, 0', width:'95%'})}
`
const Netflix = styled.div`
  width: 550px;
  height: 500px;
  margin:20px 20px 50px 20px;
  ${mobile({margin:'10px, 0', width:'95%'})}
`
const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  ${mobile({width:'90%'})}
`
const Description = styled.div`
  margin-top: 20px;
`
const Head = styled.p`
  color: black;
  font-size: larger;
  line-height: 1.8;
  letter-spacing: 3px;
`
const Body = styled.p`
  color: black;
  font-weight: 300;
  letter-spacing: 2px;
`

const Portfolio = () => {

  

  return (
    <Container id='works'>
        <ProjectsAnchor href='https://paul-desii.github.io/ecommerce/' target='_blank' >
          <Ecommerce>
            <Image src='https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMHdlYXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            <Description>
              <Head>Lama</Head>
              <Body>An ecommerce homepage built with React.</Body>
            </Description>
          </Ecommerce>
        </ProjectsAnchor>
        <ProjectsAnchor href='https://paul-desii.github.io/justbuy/' target='_blank' >
          <Justbuy>
            <Image src='https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Description>
              <Head>Justbuy</Head>
              <Body>An ecommerce homepage built with pure html, css and the bottstrap framework.</Body>
            </Description>
          </Justbuy>
        </ProjectsAnchor>
        <ProjectsAnchor href='https://paul-desii.github.io/crypto-register/' target='_blank' >
          <CryptoRegister>
            <Image src='https://images.unsplash.com/photo-1640229859880-3f6eff9e7364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5vdGVzJTIwY3J5cHRvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Description>
              <Head>Crypto Register</Head>
              <Body>A complete MERN app with authentication which is a register that helps users keep track of their crypto transactions.</Body>
            </Description>
          </CryptoRegister>
        </ProjectsAnchor>
        <ProjectsAnchor href='https://paul-desii.github.io/weatherapp/' target='_blank' >
          <WeatherApp>
            <Image src='https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Description>
              <Head>Weather App</Head>
              <Body>A weather app built on express and APIs that gives weather report on select cities.</Body>
            </Description>
          </WeatherApp>
        </ProjectsAnchor>
        <ProjectsAnchor href='https://paul-desii.github.io/keeperapp/' target='_blank' >
          <Keeper>
            <Image src='https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            <Description>
              <Head>Keeper</Head>
              <Body>A notepad that replicates Google's keeper app; built with React.</Body>
            </Description>
          </Keeper>
        </ProjectsAnchor>
        <ProjectsAnchor href='https://paul-desii.github.io/netflix/' target='_blank' >
          <Netflix>
            <Image src='https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80' />
            <Description>
              <Head>Netflix</Head>
              <Body>A homepage replicating netflix homepage built with React.</Body>
            </Description>
          </Netflix>
        </ProjectsAnchor>
    </Container>
  )
}

export default Portfolio