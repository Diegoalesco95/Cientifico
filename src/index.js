import router from './routes';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
