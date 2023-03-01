import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import store from "./redux/store";
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Provider store={store}>
        <App/>
        </Provider>
    </div>
)