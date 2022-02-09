import React, { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
import { useForm } from "../hooks/useForm";

export const AddComponent = () => {

	const { handleAdd } = useContext(TaskContext);

	const formInitialState = { description: '', state: false };
	const [formValues, handleInputChange, handleReset] = useForm(formInitialState);
	const { description } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		//Verificando que haya texto en el input
		if (description.trim().length < 1) {
			return;
		}

		handleAdd(formValues)
		//Reseteando el input cuando se termine de crear la tarea
		handleReset();
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<div className="item1">
				<input
					type="text"
					name="description"
					value={description}
					onChange={handleInputChange}
					className="form__input"
					autoComplete="off"
				/>
			</div>
			<div className="item2">
				<button type="submit" className="form__button">
					<i className="fas fa-plus"></i> Agregar
				</button>
			</div>
		</form>
	);
};
