import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useForm } from "../hooks/useForm";
import { Modal } from "./Modal";

export const ItemComponent = ({ id, taskDescription, taskState }) => {

	const { handleChangeToggle, handleChangeText, handleDelete } = useContext(TaskContext);
	const [showModal, setShowModal] = useState(false);

	const initialForm = { description: taskDescription };
	const [{ description }, handleInputChange] = useForm(initialForm);

	const [hideText, setHideText] = useState(true);

	//Cambio del estado de la TAREA
	const handleToggle = () => {
		const data = {
			id,
			description: taskDescription,
			state: !taskState,
		}
		handleChangeToggle(data);
	}

	//Cambio de la descripcion de la tarea
	const handleText = () => {
		//Solo hace el cambio cuando el input se oculta
		if (hideText === false) {
			const data = {
				id,
				description,
				state: taskState,
			}
			handleChangeText(data);
		}
		setHideText(!hideText);
	}

	const handleFunctionModal = (resp) => {
		if (resp) {
			handleDelete(id);
		}
		setShowModal(false);
	}


	return (
		<>
			<div className="task">
				<input
					type="checkbox"
					name="check"
					checked={taskState}
					className="task__check"
					onChange={handleToggle}
				/>
				<div className="task__description">
					{
						hideText
							? (<p className="task__description__text">{id+' - '+taskDescription}</p>)
							: (<input
								name="description"
								className="task__description__input"
								onChange={handleInputChange}
								value={description}
								type="text"
							/>)
					}
				</div>
				<button
					onClick={handleText}
					className="task__button-edit"
	
				>
					<i className={hideText ? 'far fa-edit' : 'fas fa-check'}></i>
				</button>
				<button
					onClick={() => setShowModal(true)}
					className="task__button-delete"
				>
					<i className="far fa-trash-alt"></i>
				</button>
			</div>
			{
				showModal 
				&&
				<Modal
					funtion={handleFunctionModal}
					title="Eliminar dato"
					description={taskDescription}
				/>
			}
		</>
	);
};
