# Rock Paper Scissors Game

A modern, interactive implementation of the classic Rock Paper Scissors game built with HTML, CSS, and JavaScript. Play against the computer in this responsive web application featuring dark mode, sound effects, and a clean user interface.

## Features

- **Classic Gameplay**: Play the timeless game of Rock Paper Scissors against a computer opponent
- **First to 5**: Game continues until either you or the computer reaches 5 points
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes based on your preference
- **Sound Effects**: Audio feedback for selections, wins, losses, and game completion
- **Accessibility**: Keyboard controls for enhanced accessibility
- **Animations**: Smooth transitions and visual feedback throughout gameplay
- **Game Instructions**: Built-in "How to Play" modal for new players

## How to Play

1. Click one of the three buttons to choose rock (👊), paper (✋), or scissors (✌️)
2. The computer will make its selection
3. The winner of the round gets one point (ties don't count)
4. The first player to reach 5 points wins the game
5. Click "Play Again" to start a new game

## Game Rules

- Rock (👊) beats Scissors
- Paper (✋) beats Rock
- Scissors (✌️) beats Paper

## Technologies Used

- **HTML5**: For structure and content
- **CSS3**: For styling, animations, and responsive design
- **JavaScript**: For game logic and interactivity
- **LocalStorage**: For preserving user preferences like dark mode

## Installation and Setup

1. Clone the repository or download the source files
2. No dependencies or build steps required
3. Open `index.html` in any modern web browser to start playing

```bash
git clone https://github.com/johnnie-610/RPS.git
cd RPS
open index.html
```

## Project Structure

```
rock-paper-scissors/
├── index.html          # Main HTML file
├── styles/
│   └── index.css       # CSS styling
├── scripts/
│   └── rps.js          # Game logic
└── sounds/
    ├── selection.wav   # Sound effects for selections
    ├── win.wav         # Sound effect for round wins
    ├── lose.wav        # Sound effect for round losses
    ├── game-win.wav    # Sound effect for game victory
    └── game-lose.mp3   # Sound effect for game defeat
```

## Customization

- Modify `index.css` to change the color scheme or styling
- Replace sound files in the `sounds` directory to customize audio feedback
- Edit game rules or points threshold in `rps.js`

## Browser Compatibility

This game works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- Multiplayer mode
- Additional weapon choices (Rock, Paper, Scissors, Lizard, Spock)
- Game statistics tracking
- Difficulty levels for computer opponent
- High score leaderboard

## License

[MIT License](LICENSE)

## Acknowledgments

- Icons and SVGs designed for optimal accessibility
- Sound effects carefully chosen for an engaging experience
