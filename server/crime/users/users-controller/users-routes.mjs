import {Router} from 'express'
import * as controller from './users-controller.mjs'

const usersRout = Router();

usersRout.route('/user/register').post(controller.registerUsers)
usersRout.route('/user/get-single/:id').get(controller.getSingleUser)
usersRout.route('/user/login').post(controller.userLogin)
usersRout.route('/user/update/:id').put(controller.updateUser)
usersRout.route('/user/report').post(controller.verifyUser, controller.reportCrime)



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