import React from 'react'
import { Link } from 'react-router-dom'
import 'css/ProdListShop.css'
import Filters from 'components/Filters'

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

        <Link to={`/product/${s.slug}`}>
        <article className="product">
            <header>
                <div className="prod-img" style={{backgroundImage: `url("${s.image}")`}} />
                <div className="prod-name">
                    <h3><Link to={`/product/${s.slug}`} > {s.name} </Link></h3>
                    <div> <b> {s.price} </b> </div>
                </div>
                <data value={s.price}>
                    <div className="prod-info"> Color: <span>{s.color}</span> </div>
                    <div className="prod-info"> Size: <span>{s.size}</span> </div>
                </data>
                <p>{s.desc}</p>
            </header>
        </article>
        
        </Link>
    )

    return (
        <>
            <Filters />
            
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