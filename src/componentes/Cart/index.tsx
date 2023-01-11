import { CartButton } from "../CartButton";
import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartCProductDetails, CartFinalization, CartProduct, CartProductImage, FinalizationDatails } from "./styles";
import { X } from "phosphor-react";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import axios from "axios";



export function Cart(){
  const { cartItems, cartTotal, removeProductFromCart } = useCart();
  const cartItemsQuantity = cartItems.length;
  const formattedCartTotal = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal);
  
  const [isCreatingCheckoutSession, setIscreatingCheckoutSession] = useState(false)
  async function handleCheckout() {
    try {
      setIscreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        products: cartItems,
      })
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      setIscreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
      console.log(err);
    }
  }
  return(
    <Dialog.Root>
       <Dialog.Trigger asChild>
          <CartButton color='gray' />
       </Dialog.Trigger>
       <Dialog.Portal>
          <CartContent>
            <CartClose>
              <X size="24" weight="bold" /> 
            </CartClose>
            <h2>Sacola de Compras</h2>
            <section>
              { cartItemsQuantity <= 0 && <p>Parece que seu carrinho está vazio :(</p>}
              {cartItems.map((cartItem) => (
                <CartProduct key={cartItem.id}>
                  <CartProductImage>
                    <Image width={180} height={93} src={cartItem.imageUrl} alt="" />
                  </CartProductImage>
                  <CartCProductDetails>
                    <p>{cartItem.name}</p>
                    <strong>{cartItem.price}</strong>
                    <button onClick={() => removeProductFromCart(cartItem.id)}>Remover</button>
                  </CartCProductDetails>
                </CartProduct>
              ))}
            </section>
            <CartFinalization>
              <FinalizationDatails>
                <div>
                  <span>Quantidade</span>
                  <p>{cartItemsQuantity} {cartItemsQuantity === 1 ? 'itens' : 'item'}</p>
                </div>
                <div>
                  <span>Valor Total</span>
                  <p>{formattedCartTotal}</p>
                </div>
              </FinalizationDatails>
              <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartItemsQuantity <= 0}>Finalizar</button>
            </CartFinalization>
          </CartContent>
       </Dialog.Portal>
    </Dialog.Root>
  )
}