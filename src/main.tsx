import ReactDOM from 'react-dom/client'
import './index.css'
import { ProductProvider } from './components/ProductContext.tsx'
import 'bulma/css/bulma.css';
import { Root } from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <Root />
  </ProductProvider>,
)
