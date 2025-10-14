import { useEffect, useRef } from 'react';
import './ArcadeBackground.css';

const ArcadeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pac-Man character eating dots
    class PacMan {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = -50;
        this.y = Math.random() * (canvas.height - 100) + 50;
        this.size = 25;
        this.speed = 2 + Math.random() * 1;
        this.mouthAngle = 0;
        this.mouthSpeed = 0.15;
        this.direction = Math.random() > 0.5 ? 1 : -1; // 1 = right, -1 = left
        if (this.direction === -1) {
          this.x = canvas.width + 50;
        }
        this.dots = [];
        this.createDots();
      }

      createDots() {
        const startX = this.direction === 1 ? this.x - 150 : this.x + 150;
        for (let i = 0; i < 10; i++) {
          this.dots.push({
            x: startX - (i * 30 * this.direction),
            y: this.y,
            eaten: false
          });
        }
      }

      update() {
        this.x += this.speed * this.direction;
        this.mouthAngle = Math.abs(Math.sin(Date.now() * this.mouthSpeed * 0.01)) * 0.4;

        // Update dots
        this.dots.forEach(dot => {
          if (!dot.eaten) {
            const dist = Math.abs(this.x - dot.x);
            if (dist < this.size) {
              dot.eaten = true;
            }
          }
        });

        if ((this.direction === 1 && this.x > canvas.width + 50) ||
            (this.direction === -1 && this.x < -50)) {
          this.reset();
        }
      }

      draw() {
        // Draw uneaten dots
        this.dots.forEach(dot => {
          if (!dot.eaten) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Draw Pac-Man
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.direction === -1) {
          ctx.scale(-1, 1);
        }
        
        // Pac-Man body
        ctx.fillStyle = '#FFFF00';
        ctx.beginPath();
        ctx.arc(0, 0, this.size, this.mouthAngle, Math.PI * 2 - this.mouthAngle);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        
        // Eye
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(5, -8, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Ghost enemy
    class Ghost {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = 20;
        this.speed = 0.5 + Math.random() * 0.5;
        this.waveOffset = Math.random() * Math.PI * 2;
        this.colors = ['#FF0000', '#00FFFF', '#FFB8FF', '#FFB852'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.horizontalSpeed = (Math.random() - 0.5) * 1;
      }

      update() {
        this.y += this.speed;
        this.x += this.horizontalSpeed;
        this.waveOffset += 0.1;

        if (this.y > canvas.height + 50 || this.x < -50 || this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        
        // Ghost body (rounded top)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, Math.PI, 0);
        ctx.lineTo(this.x + this.size, this.y + this.size);
        
        // Wavy bottom
        const waves = 4;
        for (let i = 0; i < waves; i++) {
          const waveX = this.x + this.size - (i * this.size * 2 / waves);
          const waveY = this.y + this.size + Math.sin(this.waveOffset + i) * 3;
          ctx.lineTo(waveX, waveY);
        }
        
        ctx.lineTo(this.x - this.size, this.y + this.size);
        ctx.closePath();
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(this.x - 6, this.y, 5, 0, Math.PI * 2);
        ctx.arc(this.x + 6, this.y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#0000FF';
        ctx.beginPath();
        ctx.arc(this.x - 5, this.y, 3, 0, Math.PI * 2);
        ctx.arc(this.x + 7, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Space Invaders
    class SpaceInvader {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = 30;
        this.speed = 0.3 + Math.random() * 0.4;
        this.horizontalSpeed = Math.sin(Date.now() * 0.001) * 0.5;
        this.animFrame = 0;
      }

      update() {
        this.y += this.speed;
        this.x += Math.sin(this.y * 0.01) * 0.5;
        this.animFrame += 0.1;

        if (this.y > canvas.height + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.fillStyle = '#00FF00';
        const pixelSize = 3;
        const frame = Math.floor(this.animFrame) % 2;
        
        // Classic space invader pixel pattern
        const pattern = frame === 0 ? [
          [0,0,1,0,0,0,0,0,1,0,0],
          [0,0,0,1,0,0,0,1,0,0,0],
          [0,0,1,1,1,1,1,1,1,0,0],
          [0,1,1,0,1,1,1,0,1,1,0],
          [1,1,1,1,1,1,1,1,1,1,1],
          [1,0,1,1,1,1,1,1,1,0,1],
          [1,0,1,0,0,0,0,0,1,0,1],
          [0,0,0,1,1,0,1,1,0,0,0]
        ] : [
          [0,0,1,0,0,0,0,0,1,0,0],
          [1,0,0,1,0,0,0,1,0,0,1],
          [1,0,1,1,1,1,1,1,1,0,1],
          [1,1,1,0,1,1,1,0,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1],
          [0,1,1,1,1,1,1,1,1,1,0],
          [0,0,1,0,0,0,0,0,1,0,0],
          [0,1,0,0,0,0,0,0,0,1,0]
        ];

        for (let row = 0; row < pattern.length; row++) {
          for (let col = 0; col < pattern[row].length; col++) {
            if (pattern[row][col] === 1) {
              ctx.fillRect(
                this.x + (col - 5) * pixelSize,
                this.y + (row - 4) * pixelSize,
                pixelSize,
                pixelSize
              );
            }
          }
        }
        
        ctx.restore();
      }
    }

    // Classic Fighter Character (Street Fighter style)
    class Fighter {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = -100;
        this.y = Math.random() * (canvas.height - 200) + 100;
        this.size = 40;
        this.speed = 1.5 + Math.random() * 0.8;
        this.animFrame = 0;
        this.direction = Math.random() > 0.5 ? 1 : -1;
        if (this.direction === -1) {
          this.x = canvas.width + 100;
        }
        this.color = ['#FF4444', '#4444FF', '#44FF44'][Math.floor(Math.random() * 3)];
      }

      update() {
        this.x += this.speed * this.direction;
        this.animFrame += 0.15;

        if ((this.direction === 1 && this.x > canvas.width + 100) ||
            (this.direction === -1 && this.x < -100)) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.direction === -1) {
          ctx.scale(-1, 1);
        }

        const walkCycle = Math.floor(this.animFrame) % 2;
        
        // Head
        ctx.fillStyle = '#FFD4A3';
        ctx.fillRect(-8, -30, 16, 20);
        
        // Body
        ctx.fillStyle = this.color;
        ctx.fillRect(-12, -10, 24, 25);
        
        // Arms
        ctx.fillStyle = this.color;
        const armSwing = walkCycle === 0 ? 5 : -5;
        ctx.fillRect(-12, -5, 6, 20);
        ctx.fillRect(6, -5 + armSwing, 6, 20);
        
        // Hands
        ctx.fillStyle = '#FFD4A3';
        ctx.fillRect(-12, 15, 6, 8);
        ctx.fillRect(6, 15 + armSwing, 6, 8);
        
        // Legs
        ctx.fillStyle = '#2C2C2C';
        const legSwing = walkCycle === 0 ? 8 : -8;
        ctx.fillRect(-10, 15, 8, 18);
        ctx.fillRect(2 + legSwing * 0.3, 15, 8, 18);
        
        // Feet
        ctx.fillStyle = '#000';
        ctx.fillRect(-10, 33, 10, 5);
        ctx.fillRect(2 + legSwing * 0.3, 33, 10, 5);
        
        // Face details
        ctx.fillStyle = '#000';
        ctx.fillRect(-5, -25, 3, 3); // Eye
        ctx.fillRect(2, -25, 3, 3);  // Eye
        
        ctx.restore();
      }
    }

    // Power-ups (mushrooms, stars, coins)
    class PowerUp {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.size = 20;
        this.speed = -1 - Math.random() * 0.5; // Moving up
        this.rotation = 0;
        this.rotationSpeed = 0.05;
        this.type = Math.floor(Math.random() * 2); // 0: coin, 1: heart (removed star)
        this.bobOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        this.bobOffset += 0.05;

        if (this.y < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y + Math.sin(this.bobOffset) * 5);
        ctx.rotate(this.rotation);

        switch (this.type) {
          case 0: // Coin
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size * 0.4, this.size, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFA500';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('$', 0, 0);
            break;

          case 1: // Heart
            ctx.fillStyle = '#FF1744';
            ctx.strokeStyle = '#C51162';
            ctx.lineWidth = 2;
            ctx.beginPath();
            const topCurveHeight = this.size * 0.3;
            ctx.moveTo(0, topCurveHeight);
            ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
            ctx.bezierCurveTo(-this.size / 2, this.size * 0.6, 0, this.size, 0, this.size);
            ctx.bezierCurveTo(0, this.size, this.size / 2, this.size * 0.6, this.size / 2, topCurveHeight);
            ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
            ctx.fill();
            ctx.stroke();
            break;
        }

        ctx.restore();
      }
    }

    // Tetris blocks falling
    class TetrisBlock {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * (canvas.width - 80);
        this.y = -80;
        this.speed = 0.5 + Math.random() * 0.5;
        this.rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;
        this.rotationSpeed = 0.01;
        this.blockSize = 15;
        
        // Different Tetris shapes
        this.shapes = [
          [[1,1,1,1]], // I
          [[1,1],[1,1]], // O
          [[0,1,0],[1,1,1]], // T
          [[1,1,0],[0,1,1]], // S
          [[0,1,1],[1,1,0]], // Z
          [[1,0,0],[1,1,1]], // L
          [[0,0,1],[1,1,1]], // J
        ];
        
        this.colors = ['#00FFFF', '#FFFF00', '#FF00FF', '#00FF00', '#FF0000', '#FFA500', '#0000FF'];
        this.shapeIndex = Math.floor(Math.random() * this.shapes.length);
        this.shape = this.shapes[this.shapeIndex];
        this.color = this.colors[this.shapeIndex];
      }

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height + 80) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw the Tetris block shape
        for (let row = 0; row < this.shape.length; row++) {
          for (let col = 0; col < this.shape[row].length; col++) {
            if (this.shape[row][col] === 1) {
              const x = (col - this.shape[row].length / 2) * this.blockSize;
              const y = (row - this.shape.length / 2) * this.blockSize;
              
              // Block fill
              ctx.fillStyle = this.color;
              ctx.fillRect(x, y, this.blockSize - 1, this.blockSize - 1);
              
              // Block border for that classic Tetris look
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
              ctx.lineWidth = 2;
              ctx.strokeRect(x, y, this.blockSize - 1, this.blockSize - 1);
            }
          }
        }

        ctx.restore();
      }
    }

    // Spaceship
    class Spaceship {
      constructor() {
        this.reset();
        this.projectiles = [];
        this.shootTimer = 0;
        this.shootInterval = 60 + Math.random() * 60; // Random shooting
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -60;
        this.size = 20;
        this.speed = 0.5 + Math.random() * 0.4;
        this.horizontalSpeed = (Math.random() - 0.5) * 0.8;
      }

      update() {
        this.y += this.speed;
        this.x += this.horizontalSpeed;
        this.shootTimer++;

        // Shoot projectiles
        if (this.shootTimer > this.shootInterval) {
          this.projectiles.push({
            x: this.x,
            y: this.y + 10,
            speed: 3
          });
          this.shootTimer = 0;
        }

        // Update projectiles
        this.projectiles = this.projectiles.filter(p => {
          p.y += p.speed;
          return p.y < canvas.height + 20;
        });

        if (this.y > canvas.height + 60 || this.x < -60 || this.x > canvas.width + 60) {
          this.reset();
        }
      }

      draw() {
        // Draw projectiles (laser beams)
        this.projectiles.forEach(p => {
          ctx.save();
          ctx.fillStyle = '#00FF00';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00FF00';
          
          // Laser beam
          ctx.fillRect(p.x - 2, p.y, 4, 12);
          
          // Glow effect
          ctx.fillStyle = '#88FF88';
          ctx.fillRect(p.x - 1, p.y, 2, 12);
          
          ctx.restore();
        });

        // Draw spaceship
        ctx.save();
        ctx.translate(this.x, this.y);

        // Body
        ctx.fillStyle = '#CCCCCC';
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(-this.size * 0.6, this.size * 0.5);
        ctx.lineTo(this.size * 0.6, this.size * 0.5);
        ctx.closePath();
        ctx.fill();

        // Cockpit
        ctx.fillStyle = '#00FFFF';
        ctx.beginPath();
        ctx.arc(0, -this.size * 0.3, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Wings
        ctx.fillStyle = '#888888';
        ctx.beginPath();
        ctx.moveTo(-this.size * 0.6, 0);
        ctx.lineTo(-this.size * 1.2, this.size * 0.8);
        ctx.lineTo(-this.size * 0.6, this.size * 0.5);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.size * 0.6, 0);
        ctx.lineTo(this.size * 1.2, this.size * 0.8);
        ctx.lineTo(this.size * 0.6, this.size * 0.5);
        ctx.closePath();
        ctx.fill();

        // Engine glow
        ctx.fillStyle = '#FF4400';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#FF4400';
        ctx.beginPath();
        ctx.arc(-this.size * 0.3, this.size * 0.5, this.size * 0.15, 0, Math.PI * 2);
        ctx.arc(this.size * 0.3, this.size * 0.5, this.size * 0.15, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create arcade game characters
    const pacMans = Array.from({ length: 2 }, () => new PacMan());
    const ghosts = Array.from({ length: 4 }, () => new Ghost());
    const spaceInvaders = Array.from({ length: 3 }, () => new SpaceInvader());
    const fighters = Array.from({ length: 2 }, () => new Fighter());
    const powerUps = Array.from({ length: 5 }, () => new PowerUp());
    const tetrisBlocks = Array.from({ length: 4 }, () => new TetrisBlock());
    const spaceships = Array.from({ length: 3 }, () => new Spaceship());

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all arcade elements
      pacMans.forEach(pacMan => {
        pacMan.update();
        pacMan.draw();
      });

      ghosts.forEach(ghost => {
        ghost.update();
        ghost.draw();
      });

      spaceInvaders.forEach(invader => {
        invader.update();
        invader.draw();
      });

      fighters.forEach(fighter => {
        fighter.update();
        fighter.draw();
      });

      powerUps.forEach(powerUp => {
        powerUp.update();
        powerUp.draw();
      });

      tetrisBlocks.forEach(block => {
        block.update();
        block.draw();
      });

      spaceships.forEach(ship => {
        ship.update();
        ship.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="arcade-canvas" />
    </>
  );
};

export default ArcadeBackground;

