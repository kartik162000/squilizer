const services = require('../../src/services/taskServices');
const controller = require('../../src/controller/toDoController');

describe('Check controller', () => {
  it('should return a new user', async () => {
    jest.spyOn(services, 'postTask').mockResolvedValue(
      {
        id: 1, 
        title: 'testing_title', 
        isComplete: false,
      });
    const mockRes = {
      status: jest.fn().mockReturnValue({
        send: jest.fn(),
      }),
    };
    await controller.createTask({
      body: {
        name: 'testing_title',
        isComplete: false,
    }}, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.status().send).toHaveBeenCalledWith({
      id: 1,
      title: 'testing_title',
      isComplete: false,
    });
  }),
  it('should return a list of tasks', async () => {
    jest.spyOn(services, 'getAllTasks').mockResolvedValue(
      [{}]);
    const mockRes = {
      status: jest.fn().mockReturnValue({
        send: jest.fn(),
      }),
    };
    await controller.getAllTask({}, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.status().send).toBeCalledWith([{}]);
  }),
  it('should return a task by id', async () => {
    jest.spyOn(services, 'getTaskById').mockResolvedValue(
      { 
        id: 1,
        title: 'testing_title',
        isComplete: false,
      });
      const mockRes = {
        status: jest.fn().mockReturnValue({
          send: jest.fn(),  
        }), 
      };
      await controller.getTaskById({params: { id: 1 }}, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.status().send).toHaveBeenCalledWith({
        id: 1,
        title: 'testing_title',
        isComplete: false,
      });
    }),
    it('should return a task updated', async () => {  
      jest.spyOn(services, 'updateTask').mockResolvedValue(
        [1]);
      const mockRes = {
        status: jest.fn().mockReturnValue({
          send: jest.fn(),
        }),
      };
      await controller.updateByPut({params: { id: 1 },
        body: {
          title: 'testing_title',
          isComplete: false,
        }}, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.status().send).toHaveBeenCalledWith("Task updated");
    }),
    it('should return a task deleted', async () => {  
      jest.spyOn(services, 'deleteTask').mockResolvedValue(
        1);
      const mockRes = {
        status: jest.fn().mockReturnValue({
          send: jest.fn(),
        }),
      };
      await controller.deleteTask({params: { id: 1 }}, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.status().send).toHaveBeenCalledWith("Task deleted");
    })});