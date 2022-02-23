// import logo from './logo.svg';
// import './App.css';
import Layout from "./hoc/Layout/Layout";
import BurgerBuider from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuider />
        {/* <p>Test</p> */}
      </Layout>
    </div>
  );
}

export default App;
