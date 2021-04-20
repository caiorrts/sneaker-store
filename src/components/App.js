import React from 'react'
import 'css/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header 		 from 'components/Header'
import Filters 		 from 'components/Filters'
import PageProduct 	 from 'components/PageProduct'
import ProdListShop  from 'components/ProdListShop'
import ProdListMen   from 'components/ProdListMen'
import ProdListWomen from 'components/ProdListWomen'
import ProdListKids  from 'components/ProdListKids'
import Footer 		 from 'components/Footer'
import Page404       from 'components/Page404'

//import imgProdOne from 'img/product-Nike-ZoomX-Vaporfly-NEXT.png'


const App = () => {

    const getProdList = () => {
        return [
            {
                id: 1,
                type: "Men",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-ZHm0rl.png",
                slug: "nike-zoomx-vaporfly-next",
                name: "Nike ZoomX Vaporfly NEXT%",
                price: "$330.00",
                color: "Black",
                size: "10",
                desc: "There's a reason why some of the world's most elite runners race in this shoe—it's our fastest.",
            }, {
                id: 2,
                type: "Men",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-ZHm0rl.png",
                slug: "nike-air-zoom-alphafly-next-flyknit",
                name: "Nike Air Zoom Alphafly NEXT% Flyknit",
                price: "$360.00",
                color: "Blue",
                size: "9.5",
                desc: "Strength. Energy. Effort. Inspired by one of Japan's biggest races of the year.",
            }, {
                id: 3,
                type: "Women",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-ZHm0rl.png",
                slug: "adidas-nmd-r1-primeknit",
                name: "Adidas Nmd_R1 Primeknit",
                price: "$220.00",
                color: "White",
                size: "9.0",
                desc: "The NMD series turns five, and in true NMD fashion, we're celebrating by making some major noise.",
            }, {
                id: 4,
                type: "Kids",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-ZHm0rl.png",
                slug: "adidas-gamecourt-tennis",
                name: "Adidas Gamecourt Tennis",
                price: "$100.00",
                color: "Green",
                size: "11",
                desc: "Raise your game without leaving your comfort zone.",
            }, {
                id: 5,
                type: "Women",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-ZHm0rl.png",
                slug: "puma-calibrate-runner",
                name: "Puma Calibrate Runner",
                price: "$170.00",
                color: "Grey",
                size: "10",
                desc: "A scientific advancement by human and machine: calculated cushioning by PUMA.",
            }, {
                id: 6,
                type: "Kids",
                image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-ZHm0rl.png",
                slug: "puma-ultraRide-xtreme",
                name: "Puma UltraRide Xtreme",
                price: "$110.00",
                color: "Black",
                size: "8.5",
                desc: "Sometimes to reach extraordinary places, you have to remove excess boundaries.",
            }
        ]
    }


    const prodList = getProdList()

	return (
		<Router>

			<Header />
			
			<main className="products">
				<Filters />

				<Switch>
                    <Route exact path="/">  <ProdListShop  productList={prodList} type={"Shop List"}  /> </Route>
					<Route path="/men">     <ProdListShop  productList={prodList} type={"Men"}   /> </Route>
					<Route path="/women">   <ProdListShop  productList={prodList} type={"Women"} /> </Route>
					<Route path="/kids">    <ProdListShop  productList={prodList} type={"Kids"}  /> </Route>
                    <Route path="/product/:slug"> <PageProduct   productList={prodList} /> </Route>
					<Route path="*" component={Page404} />
				</Switch>				
			</main>
			
			<Footer />

		</Router>
	)
}

export default App