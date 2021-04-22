import React,{useState,useEffect} from 'react';
import 'css/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Database} from 'components/Context'

import Header 		 from 'components/Header'
import PageProduct 	 from 'components/PageProduct'
import ProdListShop  from 'components/ProdListShop'
import Footer 		 from 'components/Footer'
import Page404       from 'components/Page404'


const App = () => {

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


	return (
        <Database.Provider value={prodList}>

            <Router>
                <Header />
                <main className="products">
                    <Switch>
                        <Route exact path="/">  <ProdListShop  type={"Shop List"}  /> </Route>
                        <Route path="/men">     <ProdListShop  type={"Men"}   />      </Route>
                        <Route path="/women">   <ProdListShop  type={"Women"} />      </Route>
                        <Route path="/kids">    <ProdListShop  type={"Kids"}  />      </Route>
                        <Route path="/search/:search" > <ProdListShop /> </Route>
                        <Route path="/size/:size"     > <ProdListShop /> </Route>
                        <Route path="/color/:color"   > <ProdListShop /> </Route>
                        <Route path="/product/:slug"  > <PageProduct  /> </Route>
                        <Route path="*" component={Page404} />
                    </Switch>				
                </main>
                <Footer />
            </Router>

        </Database.Provider>
	)
}

export default App