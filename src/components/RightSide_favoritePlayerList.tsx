import React, { useState } from "react";

import { PlayerListTypes } from "../interfaces/PlayerListTypes";

export interface FavoritePlayerProps {
    favoritePlayers: PlayerListTypes[],
}

export const FavoritePlayersList: React.FC<FavoritePlayerProps> = ({ favoritePlayers }) => {
    return <div>
        <ul>
            { favoritePlayers.map(player => (
                <li key={ player.id }>
                    { player.first_name } { player.last_name } - { player.position } { player.team.full_name }
                </li>
            )) }
        </ul>
    </div>
}
