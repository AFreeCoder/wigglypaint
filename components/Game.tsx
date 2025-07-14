'use client'

import { useState, useEffect } from 'react'

export default function Game() {
  const [targetNumber, setTargetNumber] = useState(0)
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [guessHistory, setGuessHistory] = useState<number[]>([])
  const [messageType, setMessageType] = useState<'info' | 'error' | 'success' | 'hint'>('info')
  const [isLoading, setIsLoading] = useState(false)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    setIsLoading(true)
    setTimeout(() => {
      setTargetNumber(Math.floor(Math.random() * 100) + 1)
      setGuess('')
      setMessage('🎯 Guess a number between 1 and 100!')
      setAttempts(0)
      setGameWon(false)
      setGuessHistory([])
      setMessageType('info')
      setShowHint(false)
      setIsLoading(false)
    }, 500)
  }

  const getHint = () => {
    if (attempts >= 5) {
      const range = Math.abs(targetNumber - (guessHistory[guessHistory.length - 1] || 50))
      if (range <= 5) return "🔥 You're very close!"
      if (range <= 15) return "🌡️ You're getting warmer!"
      if (range <= 25) return "❄️ You're cold!"
      return "🧊 You're very cold!"
    }
    return ""
  }

  const handleGuess = () => {
    const guessNum = parseInt(guess)
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setMessage('⚠️ Please enter a valid number between 1 and 100!')
      setMessageType('error')
      return
    }

    if (guessHistory.includes(guessNum)) {
      setMessage('🔄 You already guessed that number! Try a different one.')
      setMessageType('error')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    setGuessHistory([...guessHistory, guessNum])

    if (guessNum === targetNumber) {
      setMessage(`🎉 Congratulations! You guessed it in ${newAttempts} attempts!`)
      setMessageType('success')
      setGameWon(true)
    } else if (guessNum < targetNumber) {
      setMessage('📈 Too low! Try a higher number.')
      setMessageType('hint')
    } else {
      setMessage('📉 Too high! Try a lower number.')
      setMessageType('hint')
    }
    
    setGuess('')
    setShowHint(newAttempts >= 5 && !gameWon)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !gameWon) {
      handleGuess()
    }
  }

  const getMessageStyle = () => {
    switch (messageType) {
      case 'success':
        return 'text-green-600 bg-green-50 border border-green-200 rounded-lg p-3'
      case 'error':
        return 'text-red-600 bg-red-50 border border-red-200 rounded-lg p-3'
      case 'hint':
        return 'text-blue-600 bg-blue-50 border border-blue-200 rounded-lg p-3'
      default:
        return 'text-gray-600'
    }
  }

  const getScoreRating = () => {
    if (attempts <= 5) return { text: "🏆 Excellent!", color: "text-yellow-600" }
    if (attempts <= 8) return { text: "🥈 Great!", color: "text-gray-600" }
    if (attempts <= 12) return { text: "🥉 Good!", color: "text-orange-600" }
    return { text: "🎯 Keep practicing!", color: "text-blue-600" }
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Generating new number...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto transform transition-all duration-300 hover:shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🎲 Number Guessing Game
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="text-center mb-6">
        <div className={`mb-4 transition-all duration-300 ${getMessageStyle()}`}>
          <p className="font-medium">{message}</p>
        </div>
        
        <div className="flex justify-center space-x-6 text-sm">
          <div className="bg-gray-50 rounded-lg px-3 py-2">
            <span className="font-semibold text-gray-700">Attempts: </span>
            <span className="text-blue-600 font-bold">{attempts}</span>
          </div>
          {gameWon && (
            <div className="bg-gray-50 rounded-lg px-3 py-2">
              <span className={`font-bold ${getScoreRating().color}`}>
                {getScoreRating().text}
              </span>
            </div>
          )}
        </div>

        {showHint && (
          <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-700 text-sm font-medium">{getHint()}</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your guess (1-100)"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-center text-lg font-semibold"
            disabled={gameWon}
            min="1"
            max="100"
          />
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={handleGuess}
            disabled={gameWon || !guess}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 font-semibold shadow-md"
          >
            🎯 Guess
          </button>
          
          <button
            onClick={startNewGame}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95 font-semibold shadow-md"
          >
            🔄 New Game
          </button>
        </div>
      </div>

      {guessHistory.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Previous Guesses:</h4>
          <div className="flex flex-wrap gap-2">
            {guessHistory.map((historyGuess, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-sm font-medium ${
                  historyGuess < targetNumber
                    ? 'bg-red-100 text-red-700'
                    : historyGuess > targetNumber
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {historyGuess}
              </span>
            ))}
          </div>
        </div>
      )}

      {gameWon && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg animate-pulse">
          <div className="text-center">
            <div className="text-4xl mb-2">🎉</div>
            <p className="text-green-800 font-bold text-lg mb-2">
              Congratulations! You won!
            </p>
            <p className="text-green-700">
              The number was <span className="font-bold text-xl">{targetNumber}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 