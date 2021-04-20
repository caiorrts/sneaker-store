import React from 'react'
import { Link } from 'react-router-dom'
import 'css/ProdList.css'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SvgIcon from '@material-ui/core/SvgIcon';

const ProdListShop = ({productList, type}) => {
    let allList = ""

    if (type === "Shop List") {
        allList = productList;
    } else {
        allList = productList.filter( function (list) {
            return list.type === type;
        })
    }


    const products = allList.map((s) => 

        <article className="product">
            <header>
                <div className="prod-img" style={{backgroundImage: `url("${s.image}")`}} />
                <h3><Link to={`/product/${s.slug}`} > {s.name} </Link></h3>
                <data value={s.price}>
                    <ins>{s.price}</ins> <br/>
                    <ins>{s.color}</ins> <br/>
                    <ins>{s.size}</ins>
                </data>
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
        <>
            <section className="results">
                <h2 className="subheading">{type}</h2>
                {products}
            </section>

            <nav aria-label="Pagination" className="pagination">
                <p>1-6 of 23 products found</p>
                <ol className="pages">
                    <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                    <li><a href="#" aria-label="Page 2">2</a></li>
                    <li><a href="#" aria-label="Page 3">3</a></li>
                    <li><a href="#" aria-label="Page 4">4</a></li>
                    <li><a href="#" aria-label="Page 5">5</a></li>
                </ol>
            </nav>
        </>
    )
}

export default ProdListShop