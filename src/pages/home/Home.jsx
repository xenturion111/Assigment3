import React from 'react'
import './index.css'
import Am from "../../assets/image/Am.jpg"

const Home = () => {
    return(
        <div className="container-Home">
            <div className="text-Zone">
                <h1>Reza Aditiya mustafa</h1>
                <h2>This is a Portfolio</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
           <div className="sus-bg">
                <img id="xqcAm" src={Am} alt="Profile"/>
           </div>
    </div>
    )
   
}
export default Home;