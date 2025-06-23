import React from "react";

const PlayerTeamQuantitySelector = ({
  setMenu,
  setClubsNumber,
  setPlayersNumber,
  clubsNumber,
  playersNumber,
}) => {
  return (
    <div className="w-full max-w-md space-y-4">
      <h1 className="text-[#CFAE4E] text-xl font-semibold">
        Número de equipos
      </h1>
      <input
        type="number"
        min="2"
        max="32"
        value={clubsNumber}
        className="w-full bg-[#1C1C1C] text-white border border-gray-600 p-2 rounded"
        onChange={(e) => setClubsNumber(e.target.value)}
      />

      <h1 className="text-[#CFAE4E] text-xl font-semibold">
        Número de jugadores
      </h1>
      <input
        type="number"
        min="2"
        max="32"
        value={playersNumber}
        onChange={(e) => setPlayersNumber(e.target.value)}
        className="w-full bg-[#1C1C1C] text-white border border-gray-600 p-2 rounded"
      />

      <button
        onClick={() => setMenu("selectPlayers")}
        className="bg-[#CFAE4E] text-black font-semibold w-full p-2 rounded hover:bg-[#e5c560] transition cursor-pointer"
      >
        Siguiente
      </button>
    </div>
  );
};

export default PlayerTeamQuantitySelector;
