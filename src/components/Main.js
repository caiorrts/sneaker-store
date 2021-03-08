import React from 'react'
import HeaderMain from 'components/HeaderMain'
import Filters from 'components/Filters'
import ProductList from 'components/ProductList'
import Pagination from 'components/Pagination'

const Main = () => {
    return (
        <main className="products">
            <HeaderMain />
            <Filters />
            <ProductList />
            <Pagination />
        </main>
    )
}

export default Main