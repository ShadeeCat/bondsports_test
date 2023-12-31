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

	const handleRemoveFavorite = (player: PlayerListTypes) => {
		setFavoritePlayers((prevFavorite) => prevFavorite.filter(favorite => favorite.id !== player.id))
	}
	
	return (
		<div className="App">
			<div className="leftSideList">
				<h1>PlayerList</h1>
				<PlayerList players={ players } onFavorite={ handleFavorite } />
			</div>
			<div className='rightSideList'>
				<h2>List of favorite players</h2>
				<FavoritePlayersList favoritePlayers={ favoritePlayers } onRemoveFavorite={ handleRemoveFavorite } />
			</div>
		</div>
  );
}
