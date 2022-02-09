import React, { useContext, useEffect } from "react";
import { AddComponent } from "../components/AddComponent";

import { TaskListComponent } from "../components/TaskListComponent";
import { TaskContext } from "../context/TaskContext";

export const HomePage = () => {
	const { getTasks } = useContext(TaskContext);

	//Obteniedo las tareas desde la base de datos
	useEffect(() => {
		getTasks()
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="title">Aplicacion de Tareas</h1>

				<h2 className="subtitle">Tareas</h2>
				<AddComponent />
				<TaskListComponent />
			</div>
		</div>
	);
};
