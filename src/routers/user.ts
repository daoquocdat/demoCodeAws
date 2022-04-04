import {Router} from 'express'

const router = Router()
import {getUsers } from '../controllers/user'

router.get('/', getUsers);

export default router
