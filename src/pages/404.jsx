import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = { x: 1, y: 0 };

const NotFound = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(200);
  const [gameStarted, setGameStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const storedBestScore = localStorage.getItem('bestScore');
    if (storedBestScore) {
      setBestScore(parseInt(storedBestScore, 10));
    }
  }, []);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += direction.x;
    head.y += direction.y;

    // Vérification des collisions avec les murs
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true);
      return;
    }

    if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      const newScore = score + 1;
      setScore(newScore);
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      });

      if (newScore > bestScore) {
        setBestScore(newScore);
        localStorage.setItem('bestScore', newScore);
      }
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, score, gameOver, bestScore]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    if (!gameStarted || gameOver) return;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          e.preventDefault();
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const gameInterval = setInterval(moveSnake, speed);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameInterval);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [moveSnake, speed, gameStarted, gameOver]);

  const setDifficultyAndStart = (level) => {
    switch (level) {
      case 'easy':
        setSpeed(300);
        break;
      case 'medium':
        setSpeed(200);
        break;
      case 'hard':
        setSpeed(100);
        break;
      default:
        setSpeed(200);
    }
    setGameStarted(true);
  };

  const handleDirectionChange = (newDirection) => {
    if (!gameOver) {
      setDirection(newDirection);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4 text-teal-700">Erreur 404</h1>
      <p className="text-xl mb-8">Oops! une erreur est survenue.</p>
      <p className="text-lg mb-8">Vous pouvez jouer au Snake ou bien revenir à la page d'accueil</p>

      {!gameStarted && (
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={() => setDifficultyAndStart('easy')}
            className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-cyan-950"
          >
            Facile
          </button>
          <button 
            onClick={() => setDifficultyAndStart('medium')}
            className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-cyan-950"
          >
            Moyen
          </button>
          <button 
            onClick={() => setDifficultyAndStart('hard')}
            className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-cyan-950"
          >
            Difficile
          </button>
        </div>
      )}
      
      <div 
        className="border-4 border-gray-800" 
        style={{ 
          width: GRID_SIZE * CELL_SIZE, 
          height: GRID_SIZE * CELL_SIZE, 
          position: 'relative',
          overflow: 'hidden', // Empêche tout dépassement
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="bg-teal-700"
            style={{
              position: 'absolute',
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
              boxSizing: 'border-box',
            }}
          />
        ))}
        <div
          className="bg-orange-400"
          style={{
            position: 'absolute',
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div className="mt-4 text-xl font-bold">Score: {score}</div>
      <div className="mt-2 text-lg">Meilleur score: {bestScore}</div>
      
      {gameOver && (
        <div className="mt-4 text-xl font-bold">Game Over! Veuillez rafraîchir la page pour recommencer.</div>
      )}

      {isMobile && gameStarted && !gameOver && (
        <div className="flex flex-col items-center mt-4 space-y-2">
          <button 
            onClick={() => handleDirectionChange({ x: 0, y: -1 })}
            className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            ↑
          </button>
          <div className="flex space-x-2">
            <button 
              onClick={() => handleDirectionChange({ x: -1, y: 0 })}
              className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              ←
            </button>
            <button 
              onClick={() => handleDirectionChange({ x: 1, y: 0 })}
              className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              →
            </button>
          </div>
          <button 
            onClick={() => handleDirectionChange({ x: 0, y: 1 })}
            className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            ↓
          </button>
        </div>
      )}

      <Link to="/" className="mt-8 px-4 py-2 bg-teal-700 text-white rounded hover:bg-cyan-950">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
