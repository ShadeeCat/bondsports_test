import React, { useState } from "react"

import { PlayerSearch } from "./playerSearch"

import { PlayerListTypes } from "../interfaces/PlayerListTypes" 


interface playerListTypes {
	players: PlayerListTypes[]
}	


export const PlayerList: React.FC<playerListTypes> = ({ players }) => {

	const [searchTerm, setSearchTerm] = useState<string>("")

	const handleSearch = (searchTerm: string) => {
		setSearchTerm(searchTerm)
	}
	const filteredPlayers = players.filter(player => 
		player.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		player.last_name.toLowerCase().includes(searchTerm.toLowerCase())
	)
	return <div> 
		<PlayerSearch onSearch={ handleSearch } />
		<ul>
			{ filteredPlayers.map(player => <li key={ player.id }>
				{ player.first_name } { player.last_name } - { player.position } { player.team.full_name }
			</li>) }
		</ul>
	</div>
}