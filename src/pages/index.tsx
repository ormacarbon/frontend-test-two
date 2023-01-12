import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Link from 'next/link';
import Head from "next/head";
import { CartButton } from "../componentes/CartButton";
import { useCart } from "../hooks/useCart";
import { IProduct } from "../context/CartContext";
import { MouseEvent, useEffect, useState } from "react";
import { ProductSkeleton } from "../componentes/ProductSkeleton";


interface ProductProps {
  products: IProduct[];
}

export default function Home({ products }: ProductProps) {
  const [isloading, setIsLoading] = useState(true);

  const { addProductToCart, checkIfProductAlreadyInCart } = useCart();

  function handleAddProductToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault();
    addProductToCart(product);
  }

  useEffect(() => {
    const timeOut = setTimeout(() =>  setIsLoading(false),  2000);
    return () => clearTimeout(timeOut);
  }, [])
  return (
    <>
    <Head>
      <title>Home | Next Shop</title>
    </Head>
      <HomeContainer>
            {isloading ? (
             <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
             </>
            ) : (
              <>
              {products.map(product => {
                return(
                  <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                    <Product className="keen-slider__slide">
                      <Image src={product.imageUrl} width={520} height={400} alt="" />
                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>
                        <CartButton onClick={(e) => handleAddProductToCart(e, product)} disabled={checkIfProductAlreadyInCart(product.id)} color='green' size='large' />
                      </footer>
                    </Product>
                  </Link>
                )
              })}
              </>
            )}
      </HomeContainer>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 50
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}