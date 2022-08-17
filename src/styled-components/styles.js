import styled from 'styled-components';
const CartStyle = styled.div`
    width: 100%;
    position: fixed;
    .fill-cart{
        position: fixed;
        width:100%;
        height: 100%;
        background: #000000;
        opacity: 0.5;
        top: 0;
        left: 0;
        transform: ${( { Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
    }
    .cart_items{
        position: fixed;
        z-index: 100;
        list-style: none;
        display:flex;
        flex-flow: column nowrap;
        background-color: #fff;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        padding-top: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 0;
        transform: ${( { Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        overflow: auto;
        &::-webkit-scrollbar-thumb {
            background-color: rgb(0 6 187 / 46%);
        }
        &::-webkit-scrollbar {
            width: 0px; /*ancho del scroll vertical*/
            height: 0px; /*alto del scroll horizontal*/
        }
        @media( min-width: 768px){
            width: 500px;
        }
        .cart__item{
            padding: 20px 0;
        }
    }
    .cart_item-image{
        width: 160px;
        padding: 20px;
        background: #fff;
    }
    
`;

export default CartStyle;