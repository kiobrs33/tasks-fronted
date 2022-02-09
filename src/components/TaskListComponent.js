import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ItemComponent } from "./ItemComponent";

export const TaskListComponent = () => {
	const { store } = useContext(TaskContext);

	return (
		<div>
			{store.tasks.map((item) => (
				<ItemComponent
					key={item.id}
					id={item.id}
					taskState={item.state}
					taskDescription={item.description}
				/>
			))}
		</div>
	);
};
