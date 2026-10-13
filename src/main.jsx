import {createRoot} from 'react-dom/client';
import App from './components/App';

import './styles.css';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
    <App />
);
