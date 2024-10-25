import {Router} from 'express';
import adminRoutes from './admin/enp-point/admin-route.mjs';
import usersRout from './users/users-controller/users-routes.mjs';

// defining routes
const routes = Router();

routes.use('/api', adminRoutes)
routes.use('/api', usersRout)


// export route

export default routes
