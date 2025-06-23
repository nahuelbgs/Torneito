import React from "react";

const TeamSelector = ({
  setMenu,
  search,
  clubs,
  selectedClubs,
  clubsNumber,
  handleSelect,
  handleRemove,
  setSearch,
  shuffleArray,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Columna de búsqueda */}
        <div className="flex-1 text-center">
          <h2 className="text-[#CFAE4E] text-xl font-semibold mb-2">
            Buscar Club
          </h2>
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1C1C1C] text-white border border-gray-600 p-2 rounded mb-4"
          />

          <div className="max-h-80 overflow-y-auto space-y-2">
            {clubs.map((club) => (
              <div
                key={club.id}
                onClick={() => handleSelect(club)}
                className="flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 transition cursor-pointer px-3 py-2 rounded"
              >
                <img
                  src={club.logo_url}
                  alt={club.name}
                  className="w-8 h-8 object-cover rounded"
                />
                <span>{club.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna de seleccionados */}
        <div className="flex-1 text-center">
          <h2 className="text-[#CFAE4E] text-xl font-semibold mb-2">
            Equipos Seleccionados {` ${selectedClubs.length} / ${clubsNumber}`}
          </h2>

          {selectedClubs.length === 0 ? (
            <p className="text-gray-400">Aún no seleccionaste ningún club.</p>
          ) : (
            <div className="space-y-2">
              {selectedClubs.map((club) => (
                <div
                  key={club.id}
                  className="flex items-center gap-3 bg-[#CFAE4E]/10 border border-[#CFAE4E]/30 px-3 py-2 rounded"
                >
                  <img
                    src={club.logo_url}
                    alt={club.name}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <span className="text-white">{club.name}</span>
                  <button
                    onClick={() => handleRemove(club.id)}
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
          onClick={() => setMenu("selectPlayers")}
          className="bg-[#CFAE4E] text-black font-semibold w-full p-2 rounded hover:bg-[#e5c560] transition cursor-pointer"
        >
          Atras
        </button>
        <button
          onClick={() => {
            if (selectedClubs.length < clubsNumber) {
              alert(`Debes seleccionar al menos ${clubsNumber} equipos.`);
              return; // Evitar avanzar si no se cumplen los requisitos
            } else {
              setMenu("generateDraw");
              shuffleArray(selectedClubs);
            }
          }}
          className="bg-[#CFAE4E] text-black font-semibold w-full p-2 rounded hover:bg-[#e5c560] transition cursor-pointer"
        >
          Sortear
        </button>
      </div>
    </>
  );
};

export default TeamSelector;
