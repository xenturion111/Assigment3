import React from 'react'
import './index.css'
import Box from '@material-ui/core/Box';
import { GiConsoleController } from "react-icons/gi";
import { GrCode } from "react-icons/gr";
import { AiOutlineRead } from "react-icons/ai";

const Interest = () => {
    return (
        <div className="container-Interest">
            <h1>This is my interest</h1>
            <div className="icon-container">
                <Box className="icon">
                    <GiConsoleController id="gaming" size='60px' color='#white' />
                    <GrCode id="code" size='60px' color='#white' />
                    <AiOutlineRead id="book" size='60px' color='#white' />
                </Box>
            </div>
        </div>
    )
}
export default Interest;