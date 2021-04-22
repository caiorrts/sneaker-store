import React,{useState,useEffect} from 'react';
import 'css/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header 		 from 'components/Header'
import PageProduct 	 from 'components/PageProduct'
import ProdListShop  from 'components/ProdListShop'
import Footer 		 from 'components/Footer'
import Page404       from 'components/Page404'


const App = () => {

    //const searchText = React.createContext('OIIIII');

    // const findName = document.getElementById('find')

	// findName.addEventListener("change", () => {
	// 	console.log('FIND: ', findName.value)
	// })



    const [data, setData] = useState([]);
    const getData = () => {
      fetch("https://api.npoint.io/5cde6ff827fec5500689", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          //console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          //console.log(myJson);
          setData(myJson);
        });
    };
    useEffect(() => {
      getData();
    }, []);

    const prodList = data

    console.log(prodList)


	return (
		<Router>

			<Header />
			
			<main className="products">
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