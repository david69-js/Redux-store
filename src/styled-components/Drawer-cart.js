import React from 'react'
import styled from 'styled-components'


const CartStyle = styled.div`
    width: 100%;
    position: fixed;
    div{
        position: fixed;
        width:100%;
        height: 100%;
        background: #000000;
        opacity: 0.5;
        top: 0;
        left: 0;
        transform: ${( { Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
    }
    ul{
        position: fixed;
        z-index: 100;
        list-style: none;
        display:flex;
        flex-flow: column nowrap;
        background-color: #0f110c;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        padding-top: 3rem;
        margin-top: 0;
        transform: ${( { Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        @media( min-width: 768px){
            width: 500px;
        }
        li{
            padding: 18px 10px;
            color: white;
        }
    }
    
`;

const Cart = ({ Open }) => {
    return (
        <CartStyle Open={Open}>
            <div ></div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Portafolio</li>
                <li>Contact</li>
            </ul>
        </CartStyle>
    )
}

export default Cart