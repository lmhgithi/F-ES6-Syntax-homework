const parseData = (input) => {
    let output=[];
    const keys = input.column.map(item => item.name);
    for(let data of input.data) {
        let tmp={}
        for(let i=0; i<data.length; i+=1){
            tmp[keys[i]]=data[i];
        }
        output.push(tmp);
    }
    return output;
}
export { parseData };
