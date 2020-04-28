import { transformComponent } from '../geometry/transform';

export const transformComponent = 'transform';

export const createTransform = () => ({
    translation: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 0, y: 0, z: 0 },
});

const copyTransform = (transform, array) => {
    // TODO: Only multiply the parts that have changed.
    const translation = transform.translation;
    const rotation = transform.rotation;
    const scale = transform.scale;
    array.set([translation.x, translation.y, rotation.z, scale.x, scale.y, translation.z]);

    // const translation = matrix4.create();
    // const rotation = matrix4.create();
    // const scale = matrix4.create();
    // matrix4.setTranslation(translation, transform.translation);
    // matrix4.setRotation(rotation, transform.rotation);
    // matrix4.setScale(scale, transform.scale);

    // const transformation = matrix4.create();
    // matrix4.multiply(translation, rotation, transformation);
    // matrix4.multiply(transformation, scale, transformation);

    // array.set(transformation);
};

export const enableTransformSystem = (options, systems, updates, listeners) => {
    const entities = new Set();

    systems.add({
        components: [transformComponent, meshComponent],
        add: (entity) => {
            entities.add(entity);
        },
        delete: (entity) => {
            entities.add(entity);
        }
    });

    updates.add((deltaTime) => {
        for (const entity of entities) {
            const transform = entity.transform;
            if (transform.changed) {
                copyTransform(transform, renderable.data);
                //bufferData(renderable.buffer, renderable.index, renderable.data);
                transform.changed = false;
            }
        }
    });
};