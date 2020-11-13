export const applyDepthAction = async (parent, action) => {
    if (parent.children) {
        for (const child of parent.children) {
            await action(child);
            await applyDepthAction(child, action);
        }
    }
};

export const applyReverseDepthAction = async (parent, action) => {
    if (parent.children) {
        for (const child of parent.children) {
            await applyReverseDepthAction(child, action);
            await action(child);
        }
    }
};