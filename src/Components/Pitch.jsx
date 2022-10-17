import React from 'react'
import styled from 'styled-components'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { mobile } from '../Responsive';

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    position: relative;
    margin-bottom: 45px;
    ${mobile({marginTop:'60px', marginLeft:'0', marginBottom:'0'})}
`
const Note = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    margin-right: 50px;
    
`
const NoteText = styled.h1`
    text-align: left;
    font-weight: 300;
    line-height: 1.8;
    letter-spacing: 5px;
    ${mobile({textAlign:'left', lineSpacing:'3px', fontSize:'20px'})}
`
const Link = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    left: 150px;
    bottom: 120px;
    cursor: pointer;
    ${mobile({left:'70px'})}
`
const LinkText = styled.a`
    font-weight: 200;
    letter-spacing: 5px;
    padding: 0 10px;
    text-decoration: none;
    color: black;

    &:hover{
        font-weight: 300;
        border-bottom: 1px solid red;
    }
`
const Pitch = () => {
  return (
    <Container>
            <Note>
            <NoteText>Hi! Welcome to Paul's space; a fullstack .js web developer and UX/UI designer. I could code your thoughts and design your visions.</NoteText>
            </Note>
            <Link>
                <LinkText href='#tour'>Take a tour</LinkText>
                <ArrowRightAltOutlinedIcon />
            </Link>
    </Container>
  )
}

export default Pitch