import { Offcanvas, Stack } from "react-bootstrap";
import { useShopingCart } from "../context/shoppingCartContext";
import {CartItem} from "./cartItem"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShopingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
            </Offcanvas.Body>
          </Offcanvas>
}