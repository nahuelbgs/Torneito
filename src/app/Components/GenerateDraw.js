import React from "react";

function GenerateDraw({ setMenu, selectedPlayers, selectedClubs, setSelectedPlayers, setSelectedClubs }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#CFAE4E] mb-6">
        Sorteo Generado
      </h1>

      <div className="space-y-4 mb-6">
        {selectedClubs.map((club, index) => {
          const player = selectedPlayers[index];

          return (
            <div
              key={club.id}
              className="flex items-center justify-center bg-[#CFAE4E]/10 border border-[#CFAE4E]/30 px-4 py-3 rounded-xl"
            >
              <img
                src={club.logo_url}
                alt={club.name}
                className="w-8 h-8 object-contain mr-4"
              />
              <div className="text-white font-semibold text-lg mr-4">
                {club.name}
              </div>
              <div className="text-[#CFAE4E] font-bold text-xl mx-4">→</div>

              <div className="text-white text-lg">{player}</div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setMenu("selectQuantity");
          setSelectedPlayers([]);
          setSelectedClubs([]);
        }}
        className="bg-[#CFAE4E] text-black font-semibold w-full p-2 rounded hover:bg-[#e5c560] transition cursor-pointer"
      >
        Inicio
      </button>
    </div>
  );
}

export default GenerateDraw;
