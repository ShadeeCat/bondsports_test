import React, { useState } from "react";

import { PlayerListTypes } from "../interfaces/PlayerListTypes";

export interface FavoritePlayerProps {
    favoritePlayers: PlayerListTypes[],
    onRemoveFavorite: (player: PlayerListTypes) => void,
}

export const FavoritePlayersList: React.FC<FavoritePlayerProps> = ({ favoritePlayers, onRemoveFavorite }) => {

    const handleRemoveFavoriteClick = (player: PlayerListTypes) => {
        onRemoveFavorite(player)
    }

    return <div>
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
