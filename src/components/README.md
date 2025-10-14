# Components Directory

This directory contains reusable React components for the portfolio website.

## Component Structure

### `ArcadeBackground.jsx`
Renders animated arcade game characters in the background:
- Pac-Man with eating animation
- Ghosts
- Space Invaders
- Fighter characters
- Tetris blocks
- Spaceships with lasers
- Power-ups (coins, hearts)

Uses HTML Canvas for performance-optimized animations.

### `FloatingNav.jsx`
Floating navigation dots on the right side of the screen with:
- Smooth scrolling to sections
- Hover effects
- Labels on hover

### `ProjectCard.jsx`
Reusable project card component for displaying software projects:
- Thumbnail image
- Title and tagline
- Tech stack tags
- Hover effects with Tilt library
- Click handler for opening modals

Props:
- `project`: Project object with title, tagline, tech, videoId, etc.
- `onClick`: Function to handle click events

### `VideoModal.jsx`
Modal component for displaying project details:
- Embedded YouTube videos
- Project description
- Problem and solution sections
- Tech stack tags
- Supports both single and multi-video projects

Props:
- `project`: Project object to display
- `onClose`: Function to close the modal

## Data Structure

Project data is stored in `src/data/projectsData.js` to separate content from presentation logic.

## Future Improvements

- Extract hardware projects data to separate file
- Create HeroSection component
- Create AboutSection component
- Create SkillsSection component
- Create ContactSection component
- Add unit tests for components

