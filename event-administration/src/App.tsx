import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Globalstyle } from "./style/global";

import { RoutesComponent } from "./routes";

function App() {
  return (
    <>
      <Globalstyle />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RoutesComponent />
    </>
  );
}

export default App;
