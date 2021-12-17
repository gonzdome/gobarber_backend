import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middleware/auth';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

/* POST ROUTES */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/appointments', AppointmentController.store);

/* GET ROUTES */
routes.get('/appointments', AppointmentController.index);
routes.get('/users', UserController.index);
routes.get('/providers', ProviderController.index);
routes.get('/schedule', ScheduleController.index);
/* PUT ROUTES */
routes.put('/users', UserController.update);

export default routes;
