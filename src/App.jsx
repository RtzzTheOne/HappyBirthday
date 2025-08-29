import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [lanterns, setLanterns] = useState([]);
  const [showKisses, setShowKisses] = useState(false);
  const [playingMusic, setPlayingMusic] = useState(false);

  // Create floating elements
  useEffect(() => {
    const createFloatingElement = () => {
      const elements = ['💖', '💕', '⭐', '✨', '🎈', '🌸'];
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.textContent = elements[Math.floor(Math.random() * elements.length)];
      element.style.left = Math.random() * 100 + 'vw';
      element.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(element);
      
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 5000);
    };

    const interval = setInterval(createFloatingElement, 2000);
    return () => clearInterval(interval);
  }, []);

  const releaseLantern = () => {
    const wishes = ['Love', 'Happiness', 'Dreams Come True', 'Forever Together', 'Beautiful Moments', 'Sweet Dreams', 'Endless Joy'];
    const newLantern = {
      id: Date.now(),
      text: wishes[Math.floor(Math.random() * wishes.length)],
      x: Math.random() * 80 + 10,
    };
    setLanterns(prev => [...prev, newLantern]);
    
    setTimeout(() => {
      setLanterns(prev => prev.filter(lantern => lantern.id !== newLantern.id));
    }, 4000);
  };

  const handleSurprise = () => {
    setShowSurprise(true);
    setTimeout(() => setShowSurprise(false), 3000);
  };

  const sendKisses = () => {
    setShowKisses(true);
    setTimeout(() => setShowKisses(false), 3000);
  };

  return (
    <div className="app">
      {/* Kiss overlay */}
      {showKisses && (
        <div className="kiss-overlay">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="kiss-mark" style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's'
            }}>💋</div>
          ))}
        </div>
      )}

      {/* Background gradient */}
      <div className="gradient-background"></div>

      {/* Floating lanterns */}
      {lanterns.map(lantern => (
        <div
          key={lantern.id}
          className="floating-lantern"
          style={{ left: `${lantern.x}%` }}
        >
          🏮
          <span className="lantern-wish">{lantern.text}</span>
        </div>
      ))}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="sparkles-container">
          <span className="sparkle sparkle-1">✨</span>
          <span className="sparkle sparkle-2">💫</span>
          <span className="sparkle sparkle-3">⭐</span>
          <span className="sparkle sparkle-4">✨</span>
        </div>
        
        <h1 className="main-title">
          Happy Birthday, My Love ❤️
        </h1>
        
        <div className="birthday-cake">
          <div className="cake-emoji">🎂</div>
          <div className="candles">
            <div className="candle-flame flame-1">🕯️</div>
            <div className="candle-flame flame-2">🕯️</div>
            <div className="candle-flame flame-3">🕯️</div>
          </div>
        </div>
        
        <div className="confetti-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`confetti confetti-${i}`}>
              {['🎊', '🎉', '🎈', '💖', '⭐'][i % 5]}
            </div>
          ))}
        </div>
      </section>

      {/* Birthday Card Section */}
      <section className="card-section">
        <h2>A Special Message For You 💌</h2>
        <div className={`envelope ${envelopeOpen ? 'open' : ''}`} 
             onClick={() => setEnvelopeOpen(!envelopeOpen)}>
          <div className="envelope-front">
            <div className="envelope-icon">💌</div>
            <p>Click to open</p>
          </div>
          <div className="birthday-card">
            <div className="card-header">
              <h3>My Dearest Love 💕</h3>
            </div>
            <div className="card-content">
              <p>
                To the most beautiful person in my world,<br/><br/>
                I wish you the happiest birthday filled with love, joy, and endless laughter.<br/><br/>
                You make my every day brighter, and I'm so lucky to have you.<br/><br/>
                <strong>Happy Birthday, my love! 💖</strong>
              </p>
            </div>
            <div className="card-signature">
              With all my love,<br/>
              Your devoted partner 💕
            </div>
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="memories-section">
        <h2>Our Beautiful Memories 📸</h2>
        <div className="photo-gallery">
          <div className="photo-frame">
            <div className="photo photo-1">
              <div className="photo-placeholder">📷</div>
            </div>
            <div className="photo-caption">Our First Date</div>
          </div>
          <div className="photo-frame">
            <div className="photo photo-2">
              <div className="photo-placeholder">📷</div>
            </div>
            <div className="photo-caption">The Day You Made Me Laugh All Day</div>
          </div>
          <div className="photo-frame">
            <div className="photo photo-3">
              <div className="photo-placeholder">📷</div>
            </div>
            <div className="photo-caption">Unforgettable Trip</div>
          </div>
          <div className="photo-frame">
            <div className="photo photo-4">
              <div className="photo-placeholder">📷</div>
            </div>
            <div className="photo-caption">Perfect Moment Together</div>
          </div>
        </div>
      </section>

      {/* Surprise Section */}
      <section className="surprise-section">
        <button 
          className={`surprise-btn ${showSurprise ? 'opened' : ''}`}
          onClick={handleSurprise}
        >
          <span className="gift-box">🎁</span>
          <span className="btn-text">Click for a Surprise!</span>
        </button>
        
        {showSurprise && (
          <div className="surprise-content">
            <div className="surprise-explosion">
              {[...Array(20)].map((_, i) => (
                <span key={i} className={`explosion-particle particle-${i}`}>
                  {['💖', '⭐', '✨', '💕', '🎉'][i % 5]}
                </span>
              ))}
            </div>
            <div className="surprise-message">
              <h3>You're my greatest gift! 🎁💖</h3>
              <p>Every day with you is a celebration!</p>
            </div>
          </div>
        )}
      </section>

      {/* Interactive Wishes Section */}
      <section className="wishes-section">
        <h2>Make a Birthday Wish 💫</h2>
        <p>Click to release a lantern with your wish</p>
        <button className="wish-btn" onClick={releaseLantern}>
          Release a Wish Lantern 🏮
        </button>
        <div className="fireflies">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`firefly firefly-${i}`}>✨</div>
          ))}
        </div>
      </section>

      {/* Ending Section */}
      <section className="ending-section">
        <div className="final-message">
          <h2>Once again… Happy Birthday, My Beautiful Girlfriend 💖</h2>
          <p>I love you today, tomorrow, and forever.</p>
          
          <div className="floating-hearts">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`floating-heart heart-${i}`}>💖</div>
            ))}
          </div>
          
          <button className="kiss-btn" onClick={sendKisses}>
            Click to Kiss 💋
          </button>
        </div>
      </section>

      {/* Music control */}
      <button 
        className="music-control"
        onClick={() => setPlayingMusic(!playingMusic)}
      >
        {playingMusic ? '🔇' : '🎵'}
      </button>
    </div>
  );
}

export default App;