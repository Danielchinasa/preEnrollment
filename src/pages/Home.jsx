import React from 'react';
import Nav from '../components/Nav';
import Bg from "../assets/bg-2.jpeg"

const Home = () => {
    return ( 
        <div>
            <Nav/>
            <div>
                <img src={Bg} alt="Slider" width="100%" />
            </div>
        </div>
        

     );
}
 
export default Home;