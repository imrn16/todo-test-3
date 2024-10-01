import "./App.css";
import { useState } from "react";

function App() {
	const [todo, setTodo] = useState([]);
	const [newName, setNewName] = useState("");

	function addButton() {
		if (newName === "") {return}
		console.log("added");
		setTodo((current) => {
			return [...current, { id: crypto.randomUUID(), checky: false, name: newName }];
		});
		setNewName("");
		console.log({ todo });
	}

	function checkComplete(ident, checks) {
		setTodo((cur) => {
			return cur.map((ind) => {
				if (ind.id === ident) {
					return { ...ind, checky: checks };
				}
				return ind;
			});
		});
	}

	function deleteTask(ide) {
		setTodo((curr) => {
			return curr.filter((indiv) => indiv.id !== ide);
		});
	}

	return (
		<>
			<h2>To Do</h2>
			<input
				type=""
				placeholder="New Item"
				value={newName}
				onChange={(e) => setNewName(e.target.value)}></input>
			<button onClick={() => addButton()}>Add</button>
			<h3>List</h3>
			<ul>
				{todo.map((indTodo) => {
					return (
						<li key={indTodo.id}>
							<input
								type="checkbox"
								checked={indTodo.checky}
								onChange={(e) => checkComplete(indTodo.id, e.target.checked)}></input>
							<span>{indTodo.name}</span>
							<button onClick={() => deleteTask(indTodo.id)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
