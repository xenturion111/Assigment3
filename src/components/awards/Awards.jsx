import React from 'react'
import './index.css'
import Marcus from '../../assets/image/marcus.png'

const Awards = () => {
    return (
        <div className="container-Awards">
            <div className="text-zone"> 
                <h1>Dont have Awards or anything</h1>
                <q>
                Because you'll always be envious and jealous,
                 afraid that people might come and take it all away from you. Plotting against those who have them—those things you prize.
                </q> <p>- Marcus Aurelius</p>
                
            </div>
            <img id="marcus" src={Marcus} alt="philosophy"/>
    </div>
    )
}
export default Awards;