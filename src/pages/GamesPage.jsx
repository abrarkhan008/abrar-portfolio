// src/pages/GamesPage.jsx
// =============================================
// Fun games page to keep visitors engaged!
// Contains 3 games: Snake, Tic Tac Toe, Memory Match
// Each game is in its own component below
// =============================================

import { useState, useEffect, useRef, useCallback } from "react";

// ============================================
// GAME 1: TIC TAC TOE
// ============================================
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (b) => {
    for (let [a, x, c] of lines) {
      if (b[a] && b[a] === b[x] && b[a] === b[c]) return b[a];
    }
    return b.every(Boolean) ? "Draw" : null;
  };

  const click = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
    setWinner(checkWinner(newBoard));
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
    setWinner(null);
  };

  return (
    <div className="glass rounded-2xl p-6 gold-border">
      <h3 className="font-display text-xl font-bold text-white mb-1 text-center">
        ❌ Tic Tac Toe ⭕
      </h3>
      <p className="text-center text-gray-400 text-sm mb-4">
        {winner
          ? winner === "Draw"
            ? "It's a Draw! 🤝"
            : `${winner} Wins! 🎉`
          : `Player ${isX ? "X" : "O"}'s Turn`}
      </p>
      <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto mb-4">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => click(i)}
            className={`h-14 w-14 glass gold-border rounded-xl text-2xl font-black transition-all hover:bg-yellow-400/10
              ${cell === "X" ? "text-blue-400" : "text-pink-400"}`}
          >
            {cell}
          </button>
        ))}
      </div>
      <button
        onClick={reset}
        className="w-full py-2 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all"
      >
        New Game 🔄
      </button>
    </div>
  );
}

// ============================================
// GAME 2: MEMORY MATCH
// ============================================
const EMOJIS = ["🎯", "🚀", "💎", "🌟", "🎸", "🎨", "🦋", "🍕"];

function MemoryMatch() {
  const createCards = () => {
    const cards = [...EMOJIS, ...EMOJIS].map((emoji, i) => ({
      id: i,
      emoji,
      flipped: false,
      matched: false,
    }));
    return cards.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(createCards);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const flip = (id) => {
    if (selected.length === 2 || cards.find((c) => c.id === id).flipped) return;
    const newCards = cards.map((c) =>
      c.id === id ? { ...c, flipped: true } : c,
    );
    const newSel = [...selected, id];
    setCards(newCards);
    setSelected(newSel);
    setMoves((m) => m + 1);

    if (newSel.length === 2) {
      const [a, b] = newSel.map((id) => newCards.find((c) => c.id === id));
      if (a.emoji === b.emoji) {
        const matched = newCards.map((c) =>
          c.id === a.id || c.id === b.id ? { ...c, matched: true } : c,
        );
        setCards(matched);
        setSelected([]);
        if (matched.every((c) => c.matched)) setWon(true);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newSel.includes(c.id) ? { ...c, flipped: false } : c,
            ),
          );
          setSelected([]);
        }, 900);
      }
    }
  };

  const reset = () => {
    setCards(createCards());
    setSelected([]);
    setMoves(0);
    setWon(false);
  };

  return (
    <div className="glass rounded-2xl p-6 gold-border">
      <h3 className="font-display text-xl font-bold text-white mb-1 text-center">
        🧠 Memory Match
      </h3>
      <p className="text-center text-gray-400 text-sm mb-4">
        {won ? `You won in ${moves} moves! 🎉` : `Moves: ${moves}`}
      </p>
      <div className="grid grid-cols-4 gap-2 max-w-56 mx-auto mb-4">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => flip(c.id)}
            className={`h-12 w-12 rounded-xl text-xl transition-all duration-300 border
              ${c.flipped || c.matched ? "bg-yellow-400/20 border-yellow-400/40 rotate-0" : "glass border-white/10 hover:bg-white/5"}`}
          >
            {c.flipped || c.matched ? c.emoji : "❓"}
          </button>
        ))}
      </div>
      <button
        onClick={reset}
        className="w-full py-2 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all"
      >
        Restart 🔄
      </button>
    </div>
  );
}

// ============================================
// GAME 3: NUMBER GUESS
// ============================================
function NumberGuess() {
  const [secret] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [hint, setHint] = useState("Guess a number 1–100");
  const [attempts, setAtt] = useState(0);
  const [won, setWon] = useState(false);
  const [history, setHistory] = useState([]);

  const submit = () => {
    const n = parseInt(guess);
    if (!n || n < 1 || n > 100) return;
    const newAtt = attempts + 1;
    setAtt(newAtt);
    setHistory((h) => [guess, ...h].slice(0, 4));
    if (n === secret) {
      setHint(`✅ Correct! It was ${secret}! Got it in ${newAtt} tries.`);
      setWon(true);
    } else if (n < secret) setHint(`📈 Too low! Try higher.`);
    else setHint(`📉 Too high! Try lower.`);
    setGuess("");
  };

  const reset = () => window.location.reload();

  return (
    <div className="glass rounded-2xl p-6 gold-border">
      <h3 className="font-display text-xl font-bold text-white mb-1 text-center">
        🔢 Number Guess
      </h3>
      <p className="text-center text-gray-400 text-sm mb-4">{hint}</p>
      <div className="text-center text-xs text-gray-600 mb-3">
        Attempts: {attempts}
      </div>
      {!won && (
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            min="1"
            max="100"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Enter number..."
            className="flex-1 px-4 py-2 glass gold-border text-white rounded-xl text-sm outline-none focus:border-yellow-400 bg-transparent"
          />
          <button
            onClick={submit}
            className="px-4 py-2 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300"
          >
            Guess!
          </button>
        </div>
      )}
      {history.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-4">
          {history.map((h, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-400"
            >
              {h}
            </span>
          ))}
        </div>
      )}
      <button
        onClick={reset}
        className="w-full py-2 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all"
      >
        New Game 🔄
      </button>
    </div>
  );
}

// ============================================
// GAME 4: WORD SCRAMBLE
// ============================================
const WORDS = [
  { word: "REACT", hint: "A JavaScript library for UI" },
  { word: "DESIGN", hint: "Making things look beautiful" },
  { word: "WEBSITE", hint: "Pages on the internet" },
  { word: "STARTUP", hint: "A new business" },
  { word: "MOBILE", hint: "Smartphone or tablet" },
  { word: "BRANDING", hint: "Your business identity" },
];

function WordScramble() {
  const getRandom = () => WORDS[Math.floor(Math.random() * WORDS.length)];
  const scramble = (w) =>
    w
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

  const [current, setCurrent] = useState(getRandom);
  const [scrambled, setScrambled] = useState(() => scramble(getRandom().word));
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");
  const [score, setScore] = useState(0);

  const next = () => {
    const w = getRandom();
    setCurrent(w);
    setScrambled(scramble(w.word));
    setInput("");
    setMsg("");
  };

  const check = () => {
    if (input.toUpperCase() === current.word) {
      setMsg("✅ Correct! Well done!");
      setScore((s) => s + 1);
      setTimeout(next, 1200);
    } else {
      setMsg("❌ Try again!");
    }
  };

  return (
    <div className="glass rounded-2xl p-6 gold-border">
      <h3 className="font-display text-xl font-bold text-white mb-1 text-center">
        🔤 Word Scramble
      </h3>
      <p className="text-center text-gray-400 text-sm mb-3">Score: {score}</p>
      <div className="text-center text-3xl font-black text-yellow-400 tracking-widest mb-2">
        {scrambled}
      </div>
      <p className="text-center text-xs text-gray-500 mb-4">
        Hint: {current.hint}
      </p>
      <div className="flex gap-2 mb-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
          placeholder="Your answer..."
          className="flex-1 px-4 py-2 glass gold-border text-white rounded-xl text-sm outline-none focus:border-yellow-400 bg-transparent uppercase"
        />
        <button
          onClick={check}
          className="px-4 py-2 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300"
        >
          Check
        </button>
      </div>
      {msg && <p className="text-center text-sm mt-2 text-white">{msg}</p>}
      <button
        onClick={next}
        className="w-full mt-3 py-2 glass gold-border text-yellow-400 rounded-xl font-bold text-sm hover:bg-yellow-400/10 transition-all"
      >
        Skip Word ⏭️
      </button>
    </div>
  );
}

// ============================================
// MAIN GAMES PAGE
// ============================================
export default function GamesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            🎮 Fun Zone
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Play <span className="text-yellow-400">Games</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Take a break and enjoy some fun games! Share with friends 😄
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TicTacToe />
          <MemoryMatch />
          <NumberGuess />
          <WordScramble />
        </div>

        {/* Share CTA */}
        <div className="mt-12 glass rounded-2xl p-6 gold-border text-center">
          <p className="text-gray-300 mb-4">
            Enjoyed the games? Check out my work — I build amazing websites for
            businesses! 🚀
          </p>
          <a
            href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20played%20your%20games%20and%20I%20need%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105"
          >
            💬 Get a Website for My Business
          </a>
        </div>
      </div>
    </div>
  );
}
