import React from 'react';
import './index.css';
import Am from "../../assets/image/Am.jpg";
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Home = () => {
    return(
        <div className="container-Home">
            <div className="text-Zone">
                <h1>Reza Aditiya mustafa</h1>
                <h2>A Frontend-Dev</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </p>
                <span style={{marginRight: "1rem"}}>
                    <a target="_blank" href="https://github.com/xenturion111">
                        <FaGithub size='30px' color='yellow'/>
                    </a>
                </span>
                <span style={{marginRight: "1rem"}}>
                    <a target="_blank" href="https://www.instagram.com/xenturion666/">
                        <FaInstagram size='30px' color='yellow' />
                    </a>
                </span>
                <span>
                    <a target="_blank" href="https://www.linkedin.com/in/reza-aditiya-mustafa-61615a1b3/">
                        <FaLinkedin size='30px' color='yellow' />
                    </a>
                </span>
                    

                    

            </div>
           <div className="sus-bg">
                <img id="xqcAm" src={Am} alt="Profile"/>
           </div>
        </div>
    )
   
}
export default Home;