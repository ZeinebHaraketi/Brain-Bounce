import React from 'react'

const SearchBar = () => {
  return (
    <div className="bg-blue-50 shadow-md p-4">
    <div className="flex items-center justify-center max-w-4xl mx-auto">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Rechercher des compétences ou des mini-jeux..."
          className="w-full p-3 pl-12 border border-blue-300 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-sm transition-all duration-300"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
          />
        </svg>
      </div>
    </div>
  </div>
  )
}

export default SearchBar