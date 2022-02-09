import { types } from "../types/types";

export const TaskReducer = (state = {}, action) => {

    switch (action.type) {

        case types.getTaks:
            return {
                ...state,
                tasks: [...action.payload],
            }
        case types.showModal:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    ...action.payload
                }
            }
        case types.addTask:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case types.changeToggle:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    (task.id === action.payload.id)
                        ? { ...task, state: !task.state }
                        : task
                )
            }
        case types.changeText:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    (task.id === action.payload.id)
                        ? { ...task, description: action.payload.description }
                        : task
                )
            }
        case types.deleteTask:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            };

        default:
            return state;
    }
}