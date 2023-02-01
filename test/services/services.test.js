const db=require("../../src/models");
const taskServices=require("../../src/services/taskServices");


describe('Check services', () => {
    it('should return a new user', async () => {
   jest.spyOn(db.Task,'create').mockResolvedValue({
        id: 1,
        title: 'testing_title',
        isComplete: false
   });
    const result=await taskServices.postTask({
        title: 'testing_title',
        isComplete: false,
    })
    expect(result).toEqual({
        id: 1,
        title: 'testing_title',
        isComplete: false
    })
}),
it('should return a list of tasks', async () => {
    jest.spyOn(db.Task,'findAll').mockResolvedValue([{
        id: 1,
        title: 'testing_title',
        isComplete: false
    }]);
    const result=await taskServices.getAllTasks();
    expect(result).toEqual([{ id: 1,
        title: 'testing_title',
        isComplete: false}]);
}),
it('should return a task by id', async () => {  
    jest.spyOn(db.Task,'findOne').mockResolvedValue({
        id: 1,
        title: 'testing_title',
        isComplete: false
    });
    const result=await taskServices.getTaskById(1);
    expect(result).toEqual({ id: 1,
        title: 'testing_title',
        isComplete: false});
}),
it('should return a task updated', async () => {
    jest.spyOn(db.Task,'update').mockResolvedValue([1]);
    const result=await taskServices.updateTask(1,{title: 'testing_title',
    isComplete: false});
    expect(result).toEqual([1]);
}),
it('should return a task deleted', async () => {
    jest.spyOn(db.Task,'destroy').mockResolvedValue(1);
    const result=await taskServices.deleteTask(1);
    expect(result).toEqual(1);
})});