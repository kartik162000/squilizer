const express=require('express');
const {getAllTask,getTaskById,createTask,deleteTask,updateByPut,updateByPatch}=require('../controller/toDoController');
const {validatePostSchema,validateGetSchema}=require('../../middleware/validatorUsingJoi');
const router=express.Router();

router.get('/',getAllTask);
router.get('/:id',validateGetSchema,getTaskById);
router.post('/',validatePostSchema,createTask);
router.delete('/:id',validateGetSchema,deleteTask);
router.put('/:id',updateByPut);
router.patch('/:id',updateByPatch);

module.exports=router;