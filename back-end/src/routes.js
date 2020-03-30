import {Router} from'express';
import ongController from './controllers/OngsController';
import incidentController from './controllers/IncidentController';
import profileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create);
routes.delete('/ongs/delete/', ongController.delete);

routes.get('/incidents', incidentController.index); //list all incidents
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index)

export default routes;

