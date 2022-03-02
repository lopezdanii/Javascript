Array.prototype.exists = function (x) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == x) return true;
    }
    return false;
}

const newArr2=[]
let lista=['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Iceland','Japan','Kenya']
for(const i of countries){
    console.log(i)
    if(lista.exists(i)){

        newArr2.push([i,i.slice(0,3).toUpperCase(),i.length])
    }

  }
  console.log(newArr2)