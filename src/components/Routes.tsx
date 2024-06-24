import ChampsPage from "../pages/ChampsPage";
import ErrorPage from "../pages/ErrorPage";
import ItemsPage from "../pages/ItemsPage";
import SearchPlayer from "../pages/SearchPlayer";
import Inicio from "../pages/Inicio";



const Routes = [
  {
    id: 'principal',
    name: 'Inicio',
    direction: '/',
    component: Inicio,
    color: '#9c27b0', // Color morado
  },
  {
    id: 'searchplayers',
    name: 'Jugadores',
    direction: '/searchplayer',
    component: SearchPlayer,
    color: '#3f51b5', // Color índigo
  },
  {
    id: 'champs',
    name: 'Campeones',
    direction: '/champs',
    component: ChampsPage,
    color: '#ff9800', // Color naranja
  },
  {
    id: 'items',
    name: 'Items',
    direction: '/items',
    component: ItemsPage,
    color: '#4caf50', // Color verde
  },
  {
    id: 'modes',
    name: 'Modos de juego',
    direction: '/modes',
    component: ErrorPage,
    color: '#f44336', // Color rojo
  },
];

export default Routes;