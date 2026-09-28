"use client";

import { getHealth } from "@/api/generated";
import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState("");
  useEffect(() => {
    getHealth().then((health) => setHealth(health.data.status));
  }, []);
  return (
    <main>
      <h1>Think different Academy</h1>
      Status: {health.toUpperCase()}
    </main>
  );
}
