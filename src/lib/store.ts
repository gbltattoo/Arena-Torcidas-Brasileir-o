"use client";

import { useEffect, useState } from "react";
import { initialClubs, initialMatches, initialNews, initialPlayers } from "./data";
import { Club, Match, News, Player } from "./types";

export type ArenaState = {
  clubs: Club[];
  matches: Match[];
  players: Player[];
  news: News[];
};

const KEY = "arena-torcidas-portal-v1";
const initialState: ArenaState = {
  clubs: initialClubs,
  matches: initialMatches,
  players: initialPlayers,
  news: initialNews,
};

export function useArenaStore() {
  const [state, setState] = useState<ArenaState>(initialState);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      try { setState(JSON.parse(saved)); } catch {}
    }
  }, []);

  function save(next: ArenaState) {
    setState(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  function reset() {
    save(initialState);
  }

  return { state, save, reset };
}
