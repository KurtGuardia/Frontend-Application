import './App.scss';
import { Header, Navigation, Product, MainPage } from './components';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchConfig } from './actions/config';

function App() {
  const dispatch = useDispatch();

  const getConfig = useSelector((state) => state.getConfig);
  const { error, config } = getConfig;

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  const mainColor = config?.mainColor;
  const logo = config?.logo;
  const hasUserSection = config?.hasUserSection;

  return (
    <div className='App'>
      <Header logo={logo} mainColor={mainColor} />
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
