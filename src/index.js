import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import kycStoreApp from "./store/KycStore";
import { Provider } from "react-redux";

const kStore = createStore(kycStoreApp);




ReactDOM.render(
     <React.StrictMode>
         <Provider store={kStore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>,

    document.getElementById("root")
);


