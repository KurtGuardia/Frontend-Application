import './App.scss';
import { Header, Navigation, Product, MainPage } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />{' '}
      <div className='content'>
        <Navigation />
        <Switch>
          <Route exact path='/product' component={Product} />
          <Route exact path='/' component={MainPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
