const form = document.querySelector('.form');
export default function (taskName, dueDate) {
    return{
        taskName: taskName,
        dueDate: dueDate,
        completed: false
    }
};


