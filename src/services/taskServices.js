const db = require('../models')

const getAllTasks = async () => {
    const result = await db.Task.findAll();
    //console.log(typeof result);
    return result;
  }
  
  const getTaskById = async (id) => {
    let userFound = await db.Task.findOne({where: {id:id}});
    return userFound;
  }
  
  const postTask = async (task) => {
    const result = await db.Task.create(task);
    return result;
  }
  
  const updateTask = async (id,data) => {
    const {title,isComplete}=data;
    const result = await db.Task.update({isComplete: isComplete,title:title},{where: {id:id}});
    return result;
  }

    const deleteTask = async (id) => {
    const result=await db.Task.destroy({where: {id: id}});
    return result;
  }

module.exports = {
    getAllTasks,    
    postTask,
    getTaskById,
    deleteTask,
    updateTask
}