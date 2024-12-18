export function renderElementText(element, text) {
    element.textContent = text;
}

export async function executeAnimation(selector, animation, ms = 0) {
    selector.classList.add(animation);
    if (ms === 0) return;

    await sleep(ms);
    selector.classList.remove(animation);
}

export function renderVisibility(element, visible) {
    element.style.visibility = visible === true ? 'visible' : 'hidden';
}

export function toggleClassOnElement(element, className, add = true) {
    add ? element.classList.add(className) : element.classList.remove(className);
}

async function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
}
