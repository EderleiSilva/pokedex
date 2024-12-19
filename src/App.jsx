import { GlobalStyle } from './style/globalSteled';
import { Navegate } from './components/navegate/navegate';
import { Outlet } from "react-router-dom";
import { Footer } from './components/footer';
import { ThemeProvider } from './contexts/theme-contexts';

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navegate />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App
