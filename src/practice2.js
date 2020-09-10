const inject = (items, sections) => {
    let curSectionsPos = sections.length-1;
    for (let i=items.length-1; i>=0; i-=1) {
        if (curSectionsPos == -1) break;
        if (sections[curSectionsPos].index == i) {
            items=[...items.slice(0,i), sections[curSectionsPos].content, ...items.slice(i)]
            curSectionsPos-=1;
        }
    }
    return items;
}
export { inject };
