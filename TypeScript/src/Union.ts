let luckyNum: number | string | boolean

luckyNum = 5;
luckyNum = "5"
luckyNum = true


function getDbId (id: number | string) : string | number {
    if(typeof id === 'string') id.toLowerCase()

    return id;
}

const data: (number | string) [] = [1,2,6,"5"];

let seat : "window" | "middle" | "aisle"

// seat = 'crew'    gives error