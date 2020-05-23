import React from 'react';
import logo from './logo.svg';
import './App.css';
function Image(props) {
 return(
     <img src={props.imageURL}/>
 )
}
function Title(props) {
    return(
        <>
        <p>Mì tôm</p>
        </>
    )
}


function Sale(props) {
    return(
        <>
         <button>Sale</button>        
        </>
    )
}

function Price(props) {
    return(
        <>
        <p>$119.00USD</p>
        </>
    )
}

function App() {
    return ( 
    <div className = "App">
        <header className = "App-header">
         <Sale/>
         <Image imageURL="https://media3.scdn.vn/img3/2019/10_30/1rHOga_simg_b5529c_250x250_maxb.jpg"/>
         <Title/>
         <Price/>
        </header>
        </div>
    );
}


export default App;