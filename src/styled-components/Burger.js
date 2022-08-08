import React , {useState} from 'react'
import styled from 'styled-components'
import Cart from './Drawer-cart'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    z-index: 110;
    top: 10px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    
    div{
        width: 2rem;
        height: 0.25rem;
        background: ${( { Open }) => Open ? '#cecccc' : '#0f110c' };
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${( { Open }) => Open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${( { Open }) => Open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${( { Open }) => Open ? 0 : 1 };
        }
        &:nth-child(3) {
            transform: ${( { Open }) => Open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Burger = () => {
    
    const [ Open, setOpen] = useState(false)
    return (
        <>
        <StyledBurger Open={Open} onClick={() => setOpen(!Open)}>  
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <Cart Open={Open}/>
        </>
    )
}

export default Burger