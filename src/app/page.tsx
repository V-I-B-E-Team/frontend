"use client";

import { getUser, User } from "@/api/generated";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser(42).then((user) => setUser(user.data));
  }, []);

  return (
    <main>
      <h1>My App</h1>

      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
        </div>
      )}
    </main>
  );
}
