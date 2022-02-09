import React, { useReducer } from 'react';
import axios from 'axios';

import { TaskContext } from './context/TaskContext';
import { TaskReducer } from './reducer/TaskReducer';
import AppRouter from './routes/AppRouter';
import { types } from './types/types';

//Estado inicial de la APP
const initialState = {
    tasks: [],
    //Listo para mas campos
}

//URL BASE para la conexion con la base de datos
//Utilizando Variable de Entorno en DESARROLLO
const baseApiUrl = process.env.REACT_APP_API_URL;

export const AppTasks = () => {

    const [store, dispatch] = useReducer(TaskReducer, initialState);

    const handleDelete = (taskId) => {
        deleteTask(taskId);
    };

    const handleAdd = (taskData) => {
        addTask(taskData);
    }

    const handleChangeToggle = (taskData) => {
        updateToggle(taskData);
    }

    const handleChangeText = (taskData) => {
        updateText(taskData);
    }

    const getTasks = async () => {
        try {
            const { data } = await axios.get(`${baseApiUrl}/task`);
            const action = {
                type: types.getTaks,
                payload: data
            }
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const { data } = await axios.delete(`${baseApiUrl}/task/${id}`);

            if (data.status) {
                const action = {
                    type: types.deleteTask,
                    payload: { id }
                };
                dispatch(action);
            } else {
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addTask = async (taskData) => {
        try {
            const { data } = await axios.post(`${baseApiUrl}/task`, taskData);
            const action = {
                type: types.addTask,
                payload: data,
            }
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    }

    const updateToggle = async (taskData) => {
        try {
            const { data } = await axios.post(`${baseApiUrl}/task`, taskData);
            const action = {
                type: types.changeToggle,
                payload: { id: data.id }
            };
            dispatch(action);

        } catch (error) {
            console.log(error);
        }
    }

    const updateText = async (taskData) => {
        try {
            const { data } = await axios.post(`${baseApiUrl}/task`, taskData);
            const action = {
                type: types.changeText,
                payload: data,
            };
            dispatch(action);

        } catch (error) {
            console.log(error);
        }
    }


    //Compartiendo FUNCIONES E INFORMACION(store) para todos los los componentes hijos
    return (
        <TaskContext.Provider value={{
            store,
            dispatch,
            getTasks,
            handleAdd,
            handleDelete,
            handleChangeText,
            handleChangeToggle
        }}>
            <AppRouter />
        </TaskContext.Provider>
    );
};
