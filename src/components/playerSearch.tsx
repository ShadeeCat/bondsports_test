import React from "react";

interface PlayerSearchProps {
	onSearch: (searchTerm: string) => void
}

export const PlayerSearch: React.FC<PlayerSearchProps> = ({ onSearch }) => {
	
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value)
	}

	return <>
		<input 
			type="text" 
			placeholder="Search by player name" 
			onChange={handleSearchChange} 
		/>
	</>
}
