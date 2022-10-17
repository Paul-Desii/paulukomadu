import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
    ${mobile({height:'60vh'})}
`
const Image = styled.img`
    margin: 0 10px;
    ${mobile({width: '100px'})}
`
const ImageR = styled.img`
  width: 256px;
  height: 256px;
  ${mobile({width:'100px', height:'100px'})}
`

const Skills = () => {
  return (
    <Container id=''>
        <ImageR src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
        <Image src='https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_html_five-256.png' />
        <Image src='https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-2/24/bxs-file-css-256.png' />
        <Image src='https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/bootstrap-256.png' />
        <Image src='https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-256.png' />
        <Image src='https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/node-256.png' />
        <Image src='https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png' />
        <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png' />
    </Container>
  )
}

export default Skills