const parseData = ({data, column}) => {
    // TODO 使用map做数组与数组的转化，不用声明output，查查map的使用
    let output=[];
    // TODO columnKeys 没有必要
    const columnKeys = column.map(item => item.name);
    data.map(d => {
        const row={};
        // TODO 可以尝试其他非 for循环 的遍历方式
        for(let i=0; i<d.length; i+=1){
            row[columnKeys[i]]=d[i];
        }
        output.push(row);
    })
    return output;
}
export { parseData };
