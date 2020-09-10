const inject = (items, sections) => {
    let curProcessing = sections.length-1;
    for (let i=items.length-1; i>=0; i-=1) {
        if (curProcessing == -1) break;
        if (sections[curProcessing].index == i) {
            items=[...items.slice(0,i), sections[curProcessing].content, ...items.slice(i)]
            curProcessing-=1;
        }
    }
    return items;
}
export { inject };
