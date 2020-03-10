import { systems } from '../../application/host'
import { registerComponentSystem } from '../ecs';

const entities = new Set();

// TODO: Pull configured keybindings.

export function registerInpSystem() {
    registerComponentSystem('input', entities);
    systems.push(updateInputSystem);
}

function updateInputSystem(deltaTime) {
}
