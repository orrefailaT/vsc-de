const censorPattern = /(v(?:isual\s*?)?s(?:tudio\s*?)?\s*?c)o(de)/gi;

/**
 * @type {NodeFilter}
 */
const notAllWhiteSpace = (node) => {
    return node instanceof Text && !/^\s*$/.test(node.data)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
};

const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((value) => {
        censorNode(value.target);
    });
});

document.addEventListener("DOMContentLoaded", (ev) => {
    mutationObserver.observe(document.body, {
        subtree: true,
        childList: true,
    });

    censorNode(document.body);
});

/** @param {Node} node */
function censorNode(node) {
    const walker = document.createTreeWalker(
        node,
        NodeFilter.SHOW_TEXT,
        notAllWhiteSpace
    );

    /** @type {Node | null} */
    let textNode;
    while ((textNode = walker.nextNode()) && textNode.textContent) {
        if (textNode.parentElement instanceof HTMLScriptElement) {
            return;
        }
        const censoredText = censorText(textNode.textContent);
        if (textNode.textContent !== censoredText) {
            textNode.textContent = censoredText;
        }
    }
}

/** @param {string} text */
function censorText(text) {
    return text.replaceAll(censorPattern, "$1*$2");
}
