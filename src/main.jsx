import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "@/components/App";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/ReduxFinal">
          <App />
      </BrowserRouter>
      </PersistGate>
  </Provider>,
);
