function printAllImpairsBetween(start = 0, end = 100) {
    if(start > end){
        start = end + start
        end = start - end
        start = start - end
    }
    for(let i = start; i < end; i++) {
        if(i % 2 != 0){
            console.log(i)
        }
    }
}


printAllImpairsBetween(20,5)
printAllImpairsBetween(10,20)