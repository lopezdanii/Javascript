//usando bucles fromar el siguiente patron:
/*
i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

 
    for(let j=0;j<=10;j++){
        if(j==0){
        console.log(`j   j^2    j^3`)
        }
        console.log(`${j}   ${Math.pow(j,2)}    ${Math.pow(j,3)}`)

    }

 