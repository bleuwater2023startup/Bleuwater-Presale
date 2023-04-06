import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modals from "../components/Modals";
import StateContextProvider from "../context/state.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <div style={{ minHeight: "100vh" }}>
          <Header />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </div>
        <Footer />
        <Modals />
      </StateContextProvider>
    </>
  );
}

export default MyApp;
