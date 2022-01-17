import './App.css';
import Header from './components/UI/NavigationBar/Header';
import NavigationList from './components/UI/NavigationBar/NavigationList';

function App() {
  const pageLinks = [
    { key: 0, name: "Home" },
    { key: 1, name: "About" },
    { key: 2, name: "Contact" }
  ];

  return (
    <>
      <Header />
      <NavigationList links={pageLinks} />
    </>
  );
}

export default App;
