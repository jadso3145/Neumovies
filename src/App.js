import './App.css';
import HeaderApp from './components/HeaderApp';
import MainApp from './components/MainApp';
import {Switch, Route} from "react-router-dom";
import Search from './routes/Search';
import Details from './routes/Details';
import DetailsSearch from './routes/DetailsSearch';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <HeaderApp/>
                    <MainApp/>
                </Route>
                <Route exact path="/search">
                    <Search/>
                </Route>
                <Route exact path="/details/:movieId">
                    <HeaderApp/>
                    <Details/>
                </Route>
                <Route path="/detailsSearch/:searchId">
                    <HeaderApp/>
                    <DetailsSearch/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
