import React from "react";

const PlayerSelector = ({
  setMenu,
  selectedPlayers,
  setSelectedPlayers,
  playerName,
  setPlayerName,
  playersNumber,
  handlePlayerRemove,
  shuffleArray,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Columna de búsqueda */}
        <div className="flex-1 text-center">
          <h2 className="text-[#CFAE4E] text-xl font-semibold mb-2">
            Agregar Jugadores
          </h2>
          <input
            type="text"
            placeholder="Nombre..."
            onChange={(e) => setPlayerName(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                playerName.trim() !== "" &&
                selectedPlayers.length < playersNumber
              ) {
                setSelectedPlayers((prev) => [...prev, playerName.trim()]);
                e.target.value = ""; // Limpiar el input después de agregar
              } else if (
                e.key === "Enter" &&
                playerName.trim() !== "" &&
                selectedPlayers.length >= playersNumber
              ) {
                alert("No puedes agregar más jugadores.");
                e.preventDefault(); // Evitar el comportamiento por defecto si no se puede agregar
              } else if (e.key === "Enter" && playerName.trim() === "") {
                alert("Por favor, ingresa un nombre de jugador.");
                e.preventDefault(); // Evitar el comportamiento por defecto si el input está vacío
              }
            }}
            className="w-full bg-[#1C1C1C] text-white border border-gray-600 p-2 rounded mb-4"
          />

          <div className="max-h-80 overflow-y-auto space-y-2"></div>
        </div>

        {/* Columna de seleccionados */}
        <div className="flex-1 text-center">
          <h2 className="text-[#CFAE4E] text-xl font-semibold mb-2">
            Jugadores Seleccionados{" "}
            {` ${selectedPlayers.length} / ${playersNumber}`}
          </h2>

          {selectedPlayers.length === 0 ? (
            <p className="text-gray-400">
              Aún no seleccionaste ningún jugador.
            </p>
          ) : (
            <div className="space-y-2">
              {selectedPlayers.map((player) => (
                <div
                  key={player}
                  className="flex items-center gap-3 bg-[#CFAE4E]/10 border border-[#CFAE4E]/30 px-3 py-2 rounded"
                >
                  <span className="text-white">{player}</span>
                  <button
                    onClick={() => handlePlayerRemove(player)}
                    className="ml-auto text-[#CFAE4E] hover:text-red-400 cursor-pointer"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6 w-full max-w-4xl">
        <button
          onClick={() => setMenu("selectQuantity")}
          className="bg-[#CFAE4E] text-black font-semibold w-full p-2 rounded hover:bg-[#e5c560] transition cursor-pointer"
        >
          Atras
        </button>
        <button
          onClick={() => {
            if (selectedPlayers.length < playersNumber) {
              alert(`Debes seleccionar al menos ${playersNumber} jugadores.`);
              return; // Evitar avanzar si no se cumplen los requisitos
            } else {
              setMenu("selectTeams");
              shuffleArray(selectedPlayers);
            }
          }}
          className="bg-[#CFAE4E] text-black font-semibold w-full p-2 rounded hover:bg-[#e5c560] transition cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

export default PlayerSelector;
