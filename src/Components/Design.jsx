import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Image = styled.img`
    height: 100%;
    box-shadow: 0 8px 8px -4px;
    ${mobile({width:'90%'})}
`

const Design = () => {
  return (
    <Container id='tour'>
        <Image src='https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80' />
    </Container>
  )
}

export default Design