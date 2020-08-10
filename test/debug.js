import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-loader/source/main.js';
import '/node_modules/@javascribble/quantum-canvas/source/main.js';
import '/node_modules/@javascribble/quantum-keyboard/source/main.js';
import '/source/main.js';
import '/test/game.js';

const engine = document.querySelector('quantum-engine');
engine.onload = () => document.body.style.visibility = 'visible';