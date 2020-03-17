import { loadResource, loadResources } from '../imports';

export async function loadScene(resource) {
    const scene = await loadResource(resource);
    await loadSceneResources(scene.resources);
    return scene;
}