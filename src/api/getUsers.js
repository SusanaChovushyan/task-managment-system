import tasks from '../constants/tasks';

const radomizer = () => Math.round(Math.random());

async function fakeFetch(data){
    if(radomizer()){
        return ({
            res: data,
            status : 'success',
        });
    }
        return ({
            res: null,
            status: 'error',
            message: 'Server is not responding',
        })
}

const getTasks = async () => {
    return await fakeFetch(tasks)
}

export { getTasks }