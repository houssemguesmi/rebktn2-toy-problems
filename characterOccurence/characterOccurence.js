// You are given an input string.

 //For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112

 function occurence(str) {
    var array=str.split('')
    var arr=[];
    var caracters=[]
    for(var i=0; i<array.length; i++){
        if(!caracters.includes(array[i])){
             var nb=1;
            arr[i]=nb;
            caracters.push(array[i])
            for(var j=i+1; j<array.length; j++) {
                if(array[i]===array[j]){
                    nb++
                    arr[j]=nb
                }
            }
            if(nb === 1){
                arr[i]=1;
            }
        }
    }
    return arr.join('')
} 
