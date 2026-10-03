"use client";

import { getHealth, getTeam, Team } from "@/api/generated";
import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState("");
  const [team, setTeam] = useState<Team | undefined>();
  useEffect(() => {
    getHealth().then((health) => setHealth(health.data.status));
    getTeam().then((team) => setTeam(team.status == 200 ? team.data : undefined));
  }, []);
  return (
    <main>
      <h1>Think different Academy</h1>
      <p>Status: {health.toUpperCase()}</p>
      <p>Team: {team ? team.name : ""}</p>
      <p>Členové: {team ? team.members.join(", ") : ""}</p>
    </main>
  );
}
