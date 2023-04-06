import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Modals from "../components/Modals";
import Notifications from "../components/Notifications/Notifications";
import StateContextProvider from "../context/state.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <div style={{ minHeight: "100vh", marginBottom: "8em" }}>
          <Header />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </div>
        <Footer />
        <Modals />
        <Notifications />
        <LoadingScreen />
      </StateContextProvider>
    </>
  );
}

export default MyApp;
