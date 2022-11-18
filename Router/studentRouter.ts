import {Router} from 'express';
import { StudentController, getStudentController } from '../Controller/studentController';


const router=Router();

router.post('/create' ,StudentController)
router.get('/get',getStudentController)

export default router;