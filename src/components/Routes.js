import ChampsPage from "../pages/ChampsPage";
import ErrorPage from "../pages/ErrorPage";
import ItemsPage from "../pages/ItemsPage";
import SearchPlayer from "../pages/SearchPlayer";
import Inicio from "../pages/Inicio";

const Routes = [
    {
      id: 'principal',
      name: '',
      direction: '/',
      component: Inicio  
    },
    {
      id: 'searchplayers',
      name: 'Jugadores',
      direction: '/searchplayer',
      component: SearchPlayer
    },
    {
      id: 'champs',
      name: 'Campeones',
      direction: '/champs',
      component: ChampsPage
    },
    {
      id: 'items',
      name: 'Items',
      direction: '/items',
      component: ItemsPage
    },
    {
      id: 'modes',
      name: 'Modos de juego',
      direction: '/modes',
      component: ErrorPage
    },
]

export default Routes;
