"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/supabaseClient.js";
import PlayerTeamQuantitySelector from "./Components/PlayerTeamQuantitySelector.js";
import TeamSelector from "./Components/TeamSelector.js";
import PlayerSelector from "./Components/PlayerSelector.js";
import GenerateDraw from "./Components/GenerateDraw.js";

export default function Home() {
  const [clubs, setClubs] = useState([]);
  const [search, setSearch] = useState("");
  const [clubsNumber, setClubsNumber] = useState(2);
  const [playersNumber, setPlayersNumber] = useState(2);
  const [playerName, setPlayerName] = useState("");
  const [menu, setMenu] = useState("selectQuantity");
  const [selectedClubs, setSelectedClubs] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const { data, error } = await supabase
        .from("Equipos")
        .select("*")
        .ilike("name", `%${search}%`);
      if (error) {
        console.error("Error al cargar equipos:", error.message);
      } else {
        setClubs(data);
        console.log("Equipos cargados:", clubs);
      }
    };

    fetchClubs();
  }, [search]);

  const handleSelect = (club) => {
    if (selectedClubs.some((c) => c.id === club.id)) {
      return; // Ya está seleccionado
    } else if (selectedClubs.length >= clubsNumber) {
      alert(`Ya seleccionaste ${clubsNumber} equipos.`);
      return; // Limite alcanzado
    } else setSelectedClubs([...selectedClubs, club]);
  };
  const handleRemove = (id) => {
    setSelectedClubs(selectedClubs.filter((club) => club.id !== id));
  };
  const handlePlayerRemove = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p !== player));
  };

  const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambiar posiciones
  }
  return array;
}


  return (
    <div className="min-h-screen bg-[#0F0F0F] relative">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://resources-us.yinzcam.com/csf/shared/bg-1.jpg')",
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 gap-8 text-white">
        {menu === "selectQuantity" ? (
          <PlayerTeamQuantitySelector
            setMenu={setMenu}
            setClubsNumber={setClubsNumber}
            setPlayersNumber={setPlayersNumber}
            clubsNumber={clubsNumber}
            playersNumber={playersNumber}
          />
        ) : menu === "selectTeams" ? (
          <TeamSelector
            setMenu={setMenu}
            search={search}
            clubs={clubs}
            selectedClubs={selectedClubs}
            clubsNumber={clubsNumber}
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            setSearch={setSearch}
            shuffleArray={shuffleArray}
          />
        ) : menu === "selectPlayers" ? (
          <PlayerSelector
            setMenu={setMenu}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            playerName={playerName}
            setPlayerName={setPlayerName}
            playersNumber={playersNumber}
            handlePlayerRemove={handlePlayerRemove}
            shuffleArray={shuffleArray}
          />
        ) : menu === "generateDraw" ? (
          <GenerateDraw setMenu={setMenu} selectedPlayers={selectedPlayers} selectedClubs={selectedClubs} setSelectedPlayers={setSelectedPlayers} setSelectedClubs={setSelectedClubs} />
        ) : null}
      </div>
    </div>
  );
}
