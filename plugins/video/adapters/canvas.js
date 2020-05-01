import { createCanvas, resizeCanvas } from '../renderers/canvas';

export default (engine) => {
    const canvas = createCanvas();
    const context = canvas.getContext('2d', engine.defaultCanvasOptions);
    engine.setElementParent(canvas, document.body);
    resizeCanvas(canvas);

    const renderables = new Set();
    engine.systems.set('renderable', renderables);
    engine.updates.add({
        update: (deltaTime) => {
            for (const { image, sx, sy, sw, sh, dx, dy, dw, dh } of renderables) {
                context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
            }
        }
    });
};