import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.tsx";
import "bulma/css/bulma.css";
import { RouterComponent } from "./router/RouterComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <RouterComponent />
  </ProductProvider>
);
