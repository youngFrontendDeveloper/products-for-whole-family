import './styles/index.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import App from './components/App/App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/products-for-whole-family/">
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
