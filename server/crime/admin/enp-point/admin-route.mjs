import {Router} from 'express';
import * as controller from '../controller/admin-controller.mjs'
import { authenticate } from '../auth.mjs';

// defining routes
const adminRoutes = Router();

// register
adminRoutes.route('/admin/register').post(controller.registerAdmin);
adminRoutes.route('/admin/login').post(controller.adminLogin);
adminRoutes.route('/admin/update').put(authenticate, controller.updateAdmin);
adminRoutes.route('/admin/delete/:id').delete(authenticate, controller.deleteUser);



export default adminRoutes;
