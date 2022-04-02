import React from 'react'
import './index.css'
import { SiJavascript, SiReact, SiCss3, SiHtml5 } from "react-icons/si";
import Box from '@material-ui/core/Box';

const Skills = () => {
    return (
        <div className='containerSkills'>
            
            <Box class='skill-box'>
                <h1>What I Do</h1>
                <p>This is my stack, but i'll keep learning</p>
                <Box class='skill-flex'>
                    <SiJavascript id="icon-js" size='60px' color='#101820FF'/>
                    <SiReact id="icon-react" size='60px' color='#101820FF'/>
                    <SiCss3 id="icon-css" size='60px' color='#101820FF'/>
                    <SiHtml5 id="icon-css" size='60px' color='#101820FF'/>
                </Box>
            </Box>
        </div>
    )
}
export default Skills;