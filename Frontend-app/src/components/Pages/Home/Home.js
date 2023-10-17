import React from 'react';
import Header from '../../Layout/Header';
import './Home.css'

function Home() {

  return(
    <div className="Home-general">
        <Header></Header>

        <div className='img'>
          <img className='imagem' src='https://velog.velcdn.com/images/nimwver/post/77d4cc14-1782-4a23-9cf3-573f338ae3a5/image.webp'></img>
        </div>
    </div>
  )
}

export default Home;