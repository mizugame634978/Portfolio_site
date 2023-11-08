
import './App.css';
import { Routes, Route } from "react-router-dom"; // 追加
import OutlinedCard from './OutlinedCard';
import Introduction from './Introduction';
import Product2 from './Product2';
import Product3 from './Product3';

import { BrowserRouter } from 'react-router-dom' // 追加
import Product2Detail from './Product2Detail';
function App() {
  return (
    <div>

      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={
          <div>
            <Introduction/>
            <OutlinedCard/>
            <Product2/>
            <Product3/>
          </div>
        } />
        <Route path="/Product2" element={
          <Product2Detail/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
