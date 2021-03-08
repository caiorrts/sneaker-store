import React from 'react'
import imgProdOne from 'img/product-Nike-ZoomX-Vaporfly-NEXT.png'
import imgProdTwo from 'img/product-Nike-Air-Zoom-Alphafly-NEXT-Flyknit.png'
import imgProdThree from 'img/product-Adidas-Nmd-R1-Primeknit-Shoes.png'
import imgProdFour from 'img/product-Adidas-Gamecourt-Tennis.png'
import imgProdFive from 'img/product-Puma-Calibrate-Runner.png'
import imgProdSix from 'img/product-Puma-UltraRide-Xtreme.png'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SvgIcon from '@material-ui/core/SvgIcon';

const ProductList = () => {
    
    const productList = [
        {
            id: 1,
            image: imgProdOne,
            name: "1 Nike ZoomX Vaporfly NEXT%",
            fullPrice: "$399.00",
            price: "$330.00",
            desc: "There's a reason why some of the world's most elite runners race in this shoe—it's our fastest.",
        }, {
            id: 2,
            image: imgProdTwo,
            name: "Nike Air Zoom Alphafly NEXT% Flyknit",
            fullPrice: "$420.00",
            price: "$360.00",
            desc: "Strength. Energy. Effort. Inspired by one of Japan's biggest races of the year.",
        }, {
            id: 3,
            image: imgProdThree,
            name: "Adidas Nmd_R1 Primeknit",
            fullPrice: "$290.00",
            price: "$220.00",
            desc: "The NMD series turns five, and in true NMD fashion, we're celebrating by making some major noise.",
        }, {
            id: 4,
            image: imgProdFour,
            name: "Adidas Gamecourt Tennis",
            fullPrice: "$120.00",
            price: "$100.00",
            desc: "Raise your game without leaving your comfort zone.",
        }, {
            id: 5,
            image: imgProdFive,
            name: "Puma Calibrate Runner",
            fullPrice: "$200.00",
            price: "$170.00",
            desc: "A scientific advancement by human and machine: calculated cushioning by PUMA.",
        }, {
            id: 6,
            image: imgProdSix,
            name: "Puma UltraRide Xtreme",
            fullPrice: "$140.00",
            price: "$110.00",
            desc: "Sometimes to reach extraordinary places, you have to remove excess boundaries.",
        }
    ]

    const products = productList.map((s) =>

        <article className="product">
            <header>
                <img src={s.image} alt="Product Image" />
                <h3>{s.name}</h3>
                <data value={s.price}><del>{s.fullPrice}</del> <ins>{s.price}</ins></data>
                <p>{s.desc}</p>
            </header>
            <footer>
                <button type="button">
                    <AddShoppingCartIcon aria-label="AddCart">
                        <SvgIcon>
                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                        </SvgIcon>
					</AddShoppingCartIcon> 
                </button>
                <button type="button">
                    <FavoriteIcon aria-label="Favorite">
                        <SvgIcon>
                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                        </SvgIcon>
					</FavoriteIcon> 
                </button>
            </footer>
        </article>

    )
    
    return (
        <section class="results">
            <h2 class="subheading">Results</h2>
            {products}
        </section>
    )
}

export default ProductList