import React , {useState} from 'react'
import styled from 'styled-components'
import Cart from './Drawer-cart'
import CartIcon from '../images/cart.png'
import { useSelector } from 'react-redux'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    z-index: 110;
    top: 10px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    position: ${( { Open }) => Open ? 'fixed' : 'unset' };
    div{
        width: 2rem;
        height: 0.25rem;
        background: ${( { Open }) => Open ? '#cecccc' : '#0f110c' };
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 1s linear;
        
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
    const countCartItems = useSelector((state) => state.AddToCart.products)
    const sumall = countCartItems.map(item => item.qty).reduce((prev, curr) => prev + curr, 0);
    const [ Open, setOpen] = useState(false)
    return (
        <>
        <StyledBurger Open={Open} onClick={() => setOpen(!Open)}>  
            {Open ? 
                <>
                <div></div>
                <div></div>
                <div></div>
                </>:<span className="cartIcon flex">
                        <img src={CartIcon} alt='cart' />
                        <span className="cartIcon-qty">{sumall === 0 ? '' : sumall}</span>
                    </span>
            }
            
        </StyledBurger>
        <Cart Open={Open} setOpen={setOpen}/>
        </>
    )
}

export default Burger