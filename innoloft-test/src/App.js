import './App.scss';
import {
  Header,
  Navigation,
  ProductImage,
  ProductMainInfo,
  DescriptionTab,
  AttributesTab,
  TabContent,
  UserInfo,
  Map,
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <ProductImage />
      <ProductMainInfo />
      <DescriptionTab />
      <AttributesTab />
      <TabContent />
      <UserInfo />
      <Map />
    </div>
  );
}

export default App;
