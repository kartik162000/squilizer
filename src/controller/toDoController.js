// const db = require('../models')
const taskServices = require('../services/taskServices');

const getAllTask = async (req, res) => {
    const result = await taskServices.getAllTasks();
    res.status(200).send(result);
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    const getTask=await taskServices.getTaskById(id);
        res.status(200).send(getTask)
   
}
const createTask = async(req, res) => {
    const newTask = await taskServices.postTask(req.body);
    res.status(201).send(newTask);

};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const deleteTask = await taskServices.deleteTask(id);
    if(deleteTask)
    res.status(200).send("Task deleted");
    else
    res.status(404).send("Id not found");
};

const updateByPut = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updateTask = taskServices.updateTask(id,data);
    if(updateTask)
    res.status(200).send("Task updated");
    else
    res.status(404).send("Id not found");
};

const updateByPatch = (req, res) => {
    // const { id } = req.params;
    // const data = req.body;
    // const todo = tasks.findIndex((task) => task.id === Number(id));
    // if (todo === -1) {
    //     res.status(404).send("id not found");
    // }
    // else {
    //     tasks[todo] = { ...tasks[todo], ...data };
    //     console.log(tasks[todo]);
    //     res.status(200).send(tasks[todo]);
    // }
};

module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    deleteTask,
    updateByPut,
    updateByPatch
};
