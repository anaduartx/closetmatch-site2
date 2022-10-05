import React from 'react';
import '../styles/home.css';
import mobile from '../images/mobile.png';
import apple from '../images/apple.png';
import google from '../images/googleplay.png';

const Home = () => {
    return (
        <form className='form'>
            <h5 className='texto-colorido'>NEW<h5 className='frase'>trocas de roupas inteligentes</h5> </h5>
            <div className='home'>
                
                <h1>Closet</h1>
                <h1>Match</h1>
                <h3>Troque, use, reuse</h3>
                <img className='imagem' src={mobile} alt="Mobile" />
                <img className='download' src={apple} alt="Apple download" />
                <img className='download' src={google} alt="Google Play download" />
            </div>
        </form>
    );
};

export default Home;

