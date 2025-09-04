import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [lanterns, setLanterns] = useState([]);
  const [showKisses, setShowKisses] = useState(false);
  const [playingMusic, setPlayingMusic] = useState(false);
  const [kissCount, setKissCount] = useState(0);
  const [kissButtonText, setKissButtonText] = useState('Click to Kiss 💋');
  const [permanentKisses, setPermanentKisses] = useState([]);
  const [showBigKiss, setShowBigKiss] = useState(false);

  // Add audio ref for music control
  const audioRef = useRef(null);

  // Add music control function
  const toggleMusic = () => {
    if (audioRef.current) {
      if (playingMusic) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      }
      setPlayingMusic(!playingMusic);
    }
  };

  // Set audio volume when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set to 30% volume
    }
  }, []);

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
    
    // Create 5 lanterns at once
    for (let i = 0; i < 5; i++) {
      const newLantern = {
        id: Date.now() + i, // Unique ID for each lantern
        text: wishes[Math.floor(Math.random() * wishes.length)],
        x: Math.random() * 80 + 10, // Random horizontal position
        delay: i * 1 // Stagger the animation start times
      };
      
      setTimeout(() => {
        setLanterns(prev => [...prev, newLantern]);
        
        // Remove lantern after animation completes (longer duration now)
        setTimeout(() => {
          setLanterns(prev => prev.filter(lantern => lantern.id !== newLantern.id));
        }, 80000); // 8 seconds to match the new slower animation
      }, newLantern.delay * 1000);
    }
  };

  const handleSurprise = () => {
    setShowSurprise(true);
    // Don't hide the surprise anymore - make it permanent
  };

  const sendKisses = () => {
    const newKissCount = kissCount + 1;
    setKissCount(newKissCount);
    
    if (newKissCount < 10) {
      // Add permanent kisses to the screen
      const newKisses = [];
      for (let i = 0; i < newKissCount * 2; i++) {
        newKisses.push({
          id: `${newKissCount}-${i}`,
          left: Math.random() * 90 + 5,
          top: Math.random() * 90 + 5,
          size: Math.random() * 1.5 + 1,
          rotation: Math.random() * 360
        });
      }
      setPermanentKisses(prev => [...prev, ...newKisses]);
      
      // Show temporary overlay effect
      setShowKisses(true);
      setTimeout(() => setShowKisses(false), 1000);
      
      // Update button text based on kiss count
      if (newKissCount === 1) {
        setKissButtonText('One more please 🥺💕');
      } else if (newKissCount === 2) {
        setKissButtonText('Can you give one more? 😘💖');
      } else if (newKissCount < 9) {
        setKissButtonText('More kisses please! 😚💋');
      } else if (newKissCount === 9) {
        setKissButtonText('One more for the magic! ✨💋');
      }
    } else if (newKissCount === 10) {
      // 10th click - clear all small kisses and show big one
      setPermanentKisses([]);
      setShowBigKiss(true);
      setKissButtonText('Too much love? 💕');
    } else if (newKissCount === 11) {
      // 11th click - start fading the big kiss
      setKissButtonText('One more to clear... 🫣✨');
    } else if (newKissCount === 12) {
      // 12th click - remove the big kiss completely
      setShowBigKiss(false);
      setKissButtonText('All clean! Kiss again? 😘💋');
      setKissCount(0); // Reset for a new cycle
    }
  };

  return (
    <div className="app">
      {/* Background music */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/hbdsong.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Permanent kisses overlay */}
      {permanentKisses.length > 0 && (
        <div className="permanent-kisses-overlay">
          {permanentKisses.map(kiss => (
            <div
              key={kiss.id}
              className="permanent-kiss"
              style={{
                left: `${kiss.left}%`,
                top: `${kiss.top}%`,
                fontSize: `${kiss.size}rem`,
                transform: `rotate(${kiss.rotation}deg)`
              }}
            >
              💋
            </div>
          ))}
        </div>
      )}

      {/* Big kiss overlay */}
      {showBigKiss && (
        <div className="big-kiss-overlay">
          <div className="big-kiss">💋</div>
        </div>
      )}

      {/* Temporary kiss overlay */}
      {showKisses && (
        <div className="kiss-overlay">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="kiss-mark" style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 0.5 + 's'
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
        
        <h1 className="main-title"><br/>
          Happy Birthday, My Love <br/>
          07/09/2004 <br/><br/><br /><br /><br />
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

      {/* Surprise Section */}
      <section className="surprise-section">
        {!showSurprise && (
          <button 
            className={`surprise-btn ${showSurprise ? 'opened' : ''}`}
            onClick={handleSurprise}
          >
            <span className="gift-box">🎁</span>
            <span className="btn-text">Click for a Surprise!</span>
          </button>
        )}
        
        {showSurprise && (
          <div className="surprise-content">
            <div className="surprise-gif-container">
              <img 
                src="/test.gif" 
                alt="Surprise GIF" 
                className="surprise-gif"
              />
            </div>
            <div className="surprise-message">
              <h3>I am your surprise</h3>
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
          <h2>Once again… Happy Birthday, My Beautiful Girl 💖</h2>
          <p>I love you today, tomorrow, and forever.</p>
          
          <div className="floating-hearts">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`floating-heart heart-${i}`}>💖</div>
            ))}
          </div>
          
          <button className="kiss-btn" onClick={sendKisses}>
            {kissButtonText}
          </button>
        </div>
      </section>

      {/* Music control */}
      <button 
        className="music-control"
        onClick={toggleMusic}
      >
        {playingMusic ? '🔇' : '🎵'}
      </button>
    </div>
  );
}

export default App;