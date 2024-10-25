import {Router} from 'express'
import * as controller from './users-controller.mjs'
import {validationResult,  body, checkSchema} from 'express-validator'
import { crimeValidator } from './validate-crime.mjs';

const usersRout = Router();

usersRout.route('/user/register').post(controller.registerUsers)
usersRout.route('/user/login').post(controller.verifyUser, controller.userLogin)
usersRout.route('/user/update/:id').put(controller.updateUser)
usersRout.route('/user/report').post(controller.reportCrime)



export default usersRout;


/* {
  "description": "he stole an Iphone",
  "contact": "09068842993",
  "address": {
    "state": "Nasarawa",
    "city": "Keffi",
    "street": "Street No 1"
  }
} */