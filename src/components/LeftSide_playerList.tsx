import React, { useState } from "react"

import { PlayerSearch } from "./PlayerSearch"

import { PlayerListTypes } from "../interfaces/PlayerListTypes" 


interface playerListTypes {
	players: PlayerListTypes[],
	onFavorite: (player: PlayerListTypes) => void
}	


export const PlayerList: React.FC<playerListTypes> = ({ players, onFavorite }) => {

	const [searchTerm, setSearchTerm] = useState<string>("")
	
	const handleSearch = (searchTerm: string) => {
		setSearchTerm(searchTerm)
	}

	const filteredPlayers = players.filter(player => 
		player.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		player.last_name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const handleFavoriteClick = (player: PlayerListTypes) => {
		onFavorite(player)
	}

	return <> 
		<PlayerSearch onSearch={ handleSearch } />
		<ul>
			{ filteredPlayers.map(player => <li key={ player.id }>
				{ player.first_name } { player.last_name } - { player.position } { player.team.full_name }
				<button className="favoriteButton" onClick={ () => handleFavoriteClick(player) }>Favorite</button>
			</li>) }
		</ul>
	</>
}
