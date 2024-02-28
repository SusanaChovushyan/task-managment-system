import React, { useEffect, useState, useMemo } from 'react';
import { getTasks } from "../../api/getUsers";
import Task from '../Task/Task';
import Modal from '../Modal/Modal';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        getTasks().then((response) => {
            if (response.status === 'success') {
                setTasks(response.res);
            }
        });
    }, []);

    const groupedTasks = useMemo(() => {
        return tasks.reduce((acc, task) => {
            (acc[task.status] = acc[task.status] || []).push(task);
            return acc;
        }, {});
    }, [tasks]);

    const handleDelete = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const handleStatusChange = (id, newStatus) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
    };

    const handlePriorityChange = (id, newPriority) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, priority: newPriority } : task));
    };

    const handleEditClick = (id) => {
        setIsEditModalOpen(true);
    };

    const statuses =  ['todo', 'in progress', 'done', 'backlog'];

    return (
        <>
            <div className="task-container">
                {statuses.map(status => (
                    <div key={status} className="column">
                        <h1>{status}</h1>
                        {(groupedTasks[status] || []).map(task => (
                            <Task
                                key={task.id}
                                {...task}
                                handleDelete={handleDelete}
                                handleStatusChange={handleStatusChange}
                                handlePriorityChange={handlePriorityChange}
                                handleEditClick={handleEditClick}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {isEditModalOpen && <Modal onClose={() => setIsEditModalOpen(false)}></Modal>}
        </>
    );
}

export default Tasks;