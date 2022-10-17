import React from 'react'
import styled from 'styled-components'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { mobile } from '../Responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`
const Line = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Note = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    margin-right: 100px;
`
const NoteText = styled.h1`
    text-align: left;
    font-weight: 200;
    line-height: 1.8;
    letter-spacing: 5px;
    ${mobile({textAlign:'left', lineSpacing:'3px', fontSize:'20px'})}
`
const Link = styled.div`
    position: absolute;
    left: 120px;
    bottom: 170px;
    ${mobile({left:'40px'})}
`
const LinkText = styled.a`
    font-weight: 200;
    letter-spacing: 5px;
    font-size: 35px;
    padding: 0 10px 5px 0;
    text-decoration: none;
    color: red;
    border-bottom: 1px solid black;
    cursor: pointer;
    ${mobile({textAlign:'left', lineSpacing:'3px', fontSize:'20px'})}

`
const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({marginTop:'-60px'})}
`

const Footer = () => {
  return (
    <Container>
        <Line><hr style={{width:'80%', position:'absolute', top:'120px'}} /></Line>
            <Note>
                <NoteText>Consider my skills relevant and good for your next project?.</NoteText>
            </Note>
            <Link>
                <LinkText href='mailto: paulcydesmond@gmail.com'>Send me an Email</LinkText>
                <ArrowRightAltOutlinedIcon  />
            </Link>
            <Copyright><p style={{color:'#808080'}}>© Copyright 2022</p><p style={{color:'#808080', opacity:'0.5', fontSize:'smaller'}}>Inspired by hangar(dot)co and workdiary(dot)de</p></Copyright>
    </Container>
  )
}

export default Footer