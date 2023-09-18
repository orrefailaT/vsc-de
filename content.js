const censorPattern = /(v(?:isual\s*?)?s(?:tudio\s*?)?\s*?c)o(de)/gi;

/** @type {NodeFilter} */
const notAllWhiteSpace = (node) => {
    if (!/^\s*$/.test(node.data)) {
        return NodeFilter.FILTER_ACCEPT;
    }
};

const mutationObserver = new MutationObserver((mutations) => {
    console.log(mutations);
    mutations.forEach((value) => {
        censorNode(value.target);
    });
});

mutationObserver.observe(document, {
    subtree: true,
    childList: true,
});

document.addEventListener("DOMContentLoaded", (ev) => {
    console.log(ev);
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
        textNode.textContent = censorText(textNode.textContent);
    }
}

/** @param {string} text */
function censorText(text) {
    return text.replaceAll(censorPattern, "$1*$2");
}
