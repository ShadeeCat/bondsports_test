import React, { useState, useEffect } from 'react';
import './App.css';

import { PlayerListTypes } from './interfaces/PlayerListTypes';
import { FavoritePlayersList } from "./components/RightSide_favoritePlayerList"

import { PlayerList } from './components/LeftSide_playerList';

export const App = () => {
	const [players, setPlayers] = useState<PlayerListTypes[]>([]);
	const [favoritePlayers, setFavoritePlayers] = useState<PlayerListTypes[]>([])

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

	const handleFavorite = (player: PlayerListTypes) => {
		if (!favoritePlayers.some(favorite => favorite.id === player.id)) {
			setFavoritePlayers(prevFavorites => [...prevFavorites, player])
		}
	}
	
	return (
		<div className="App">
			<PlayerList players={ players } onFavorite={ handleFavorite } />
			<div className='rightSideList'>
				<h2>List of favorite players</h2>
				<FavoritePlayersList favoritePlayers={ favoritePlayers } />
		</div>
		</div>
  );
}
