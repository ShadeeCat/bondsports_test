import React, { useState, useEffect } from 'react';
import './App.css';

import { PlayerListTypes } from './interfaces/PlayerListTypes';

import { PlayerList } from './components/playerList';

export const App = () => {
	const [players, setPlayers] = useState<PlayerListTypes[]>([]);

	useEffect(() => {
		const fetchData = () => {
			fetch("https://www.balldontlie.io/api/v1/players")
				.then(response => response.json())
				.then(data => {
					setPlayers(data.data)
				})
				.catch(error => {
					console.error(error);
				});
		}
		fetchData()
	}, []);
	return (
		<div className="App">
			<h1>hello</h1>
			<PlayerList players={ players } />
		</div>
  );
}
