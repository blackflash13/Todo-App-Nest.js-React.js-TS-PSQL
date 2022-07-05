import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { rootReducer } from "./components/redux/rootReducer";
import App from "./App";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
