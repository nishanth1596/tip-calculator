import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="flex flex-col items-center md:mx-8">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
