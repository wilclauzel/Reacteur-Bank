import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accounts from "./components/Accounts";
import accounts from "./assets/accounts.json";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Accounts accounts={accounts} />
        <Footer />
      </div>
    </>
  );
}

export default App;
