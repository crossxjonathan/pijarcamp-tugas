const printSegitiga = () => {
    const n = 7;
    let output = "";

    for(let x = 1; x <= n; x++){
        for(let y = 1; y <= x; y++){
            output += y + "";
        }
        output += "\n"
    }
    console.log(output)
}
printSegitiga()