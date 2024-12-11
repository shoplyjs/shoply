import React from "react";
import { PageWrapper } from "./PageWrapper";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                placeholder="Search plugins..."
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
