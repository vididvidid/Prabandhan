import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';

// Task Item Component
const TaskCard = ({ task, index, listType, moveTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { index, listType, task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className={`border p-4 rounded-lg shadow ${
        isDragging ? 'opacity-50' : 'bg-white'
      } cursor-move`}
    >
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-gray-600 mt-2">{task.description}</p>
      {task.completedAt && (
        <p className="text-xs text-gray-500 mt-2">
          Completed: {task.completedAt.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

// Column Component
const TaskColumn = ({ title, tasks, listType, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => onDrop(item.task, item.listType, listType, item.index),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }));

  return (
    <div
      ref={drop}
      className={`w-full ${isOver ? 'bg-gray-100' : ''} rounded-lg p-4`}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            index={index}
            listType={listType}
            moveTask={onDrop}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

function KanbanBoard({ selectedProject, onClose, projects, setProjects }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateProjectKanbanData = (newKanbanData) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === selectedProject.id
          ? { ...project, kanbanData: newKanbanData }
          : project
      )
    );
    selectedProject.kanbanData = newKanbanData;
  };

  const handleDrop = (task, sourceList, targetList, sourceIndex) => {
    if (sourceList === targetList) return;

    const updatedKanbanData = { ...selectedProject.kanbanData };
    
    // Remove from source list
    updatedKanbanData[sourceList] = updatedKanbanData[sourceList].filter(
      (_, index) => index !== sourceIndex
    );

    // Add to target list
    const updatedTask = targetList === 'completed' 
      ? { ...task, completedAt: new Date() }
      : task;

    updatedKanbanData[targetList] = [...updatedKanbanData[targetList], updatedTask];

    updateProjectKanbanData(updatedKanbanData);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        title,
        description,
        projectId: selectedProject.id,
      };

      const updatedKanbanData = {
        ...selectedProject.kanbanData,
        todos: [...selectedProject.kanbanData.todos, newTask],
      };

      updateProjectKanbanData(updatedKanbanData);
      setTitle("");
      setDescription("");
      setIsOpen(false);
    } else {
      alert("Task name is required");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              {selectedProject.name} - Kanban Board
            </h1>
            <p className="text-gray-600">{selectedProject.description}</p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close Board
          </button>
        </div>

        <div className="flex gap-8">
          <TaskColumn
            title="To-Do"
            tasks={selectedProject.kanbanData.todos}
            listType="todos"
            onDrop={handleDrop}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </TaskColumn>

          <TaskColumn
            title="Work in Progress"
            tasks={selectedProject.kanbanData.wip}
            listType="wip"
            onDrop={handleDrop}
          />

          <TaskColumn
            title="Completed"
            tasks={selectedProject.kanbanData.completed}
            listType="completed"
            onDrop={handleDrop}
          />
        </div>
        

        {isOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
              <form onSubmit={handleAddTask}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Name
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      setTitle("");
                      setDescription("");
                    }}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
}

export default KanbanBoard;