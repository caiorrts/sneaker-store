import React from 'react'
import {useParams} from 'react-router-dom'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SvgIcon from '@material-ui/core/SvgIcon';

const PageProduct = ({productList}) => {
    
    const {slug} = useParams()

    const prod = productList.find((prod) => prod.slug === slug) || productList[0]

    return (
        <article className="product">
            <header>
                <img src={prod.image} alt="Product Image" />
                <h3> {prod.name} </h3>
                <data value={prod.price}><ins>{prod.price}</ins></data>
                <p>{prod.desc}</p>
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
}

export default PageProduct