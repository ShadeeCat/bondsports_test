import React, { useState } from "react";

import { PlayerListTypes } from "../interfaces/PlayerListTypes";

export interface FavoritePlayerProps {
	favoritePlayers: PlayerListTypes[],
	onRemoveFavorite: (player: PlayerListTypes) => void,
}

export const FavoritePlayersList: React.FC<FavoritePlayerProps> = ({ favoritePlayers, onRemoveFavorite }) => {

	const [backgroundColor, setBackgroundColor] = useState<string>("")

	const handleRemoveFavoriteClick = (player: PlayerListTypes) => {
		onRemoveFavorite(player)
	}

	const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBackgroundColor(event.target.value)
	}

	const listStyle = {
		backgroundColor: backgroundColor || "transparent"
	}

	return <div style={ listStyle }>
		<label htmlFor="color-input">background color</label>
		<input
			id="color-input"
			type="color"
			value={ backgroundColor }
			onChange={ handleColorChange }
		/>
		<ul>
			{ favoritePlayers.map(player => (
				<li key={ player.id }>
					{ player.first_name } { player.last_name } - { player.position } { player.team.full_name }
					<button onClick={ () => handleRemoveFavoriteClick(player) } >Remove Player</button>
				</li>
			)) }
		</ul>
	</div>
}
