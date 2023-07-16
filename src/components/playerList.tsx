import React from "react"

import { PlayerListTypes } from "../interfaces/PlayerListTypes" 

interface playerListTypes {
	players: PlayerListTypes[]
}

export const PlayerList: React.FC<playerListTypes> = ({ players }) => {
	return <ul>
		{ players.map(player => <li key={ player.id }>
			{ player.first_name } { player.last_name } - { player.position } { player.team.full_name }
		</li>) }
	</ul>
}