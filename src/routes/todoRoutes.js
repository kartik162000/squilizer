const express=require('express');
const {validateLogin,validateOperations}=require('../../middleware/auth');
const {getAllTask,getTaskById,createTask,deleteTask,updateByPut,updateByPatch}=require('../controller/toDoController');
const {validatePostSchema,validateGetSchema}=require('../../middleware/validatorUsingJoi');
const router=express.Router();

router.post('/login',validateLogin)
router.get('/',validateOperations,getAllTask);
router.get('/:id',validateGetSchema,validateOperations,getTaskById);
router.post('/',validatePostSchema,validateOperations,createTask);
router.delete('/:id',validateGetSchema,validateOperations,deleteTask);
router.put('/:id',validateOperations,updateByPut);
router.patch('/:id',validateOperations,updateByPatch);

module.exports=router;