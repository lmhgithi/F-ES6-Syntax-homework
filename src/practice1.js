const parseData = ({data, column}) => {
    let output=[];
    const columnKeys = column.map(item => item.name);
    data.map(d => {
        const row={};
        for(let i=0; i<d.length; i+=1){
            row[columnKeys[i]]=d[i];
        }
        output.push(row);
    })
    return output;
}
export { parseData };
