/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
var Arrayy = function(array) {
    this.array=array;
}
Arrayy.prototype.isSubsetOf = function (arr) {
    this.arr=arr;
    this.elements=[];
    //iterate through the array
    for(var i = 0; i < this.array.length; i++) {

        //if one of the elements is object
        if (typeof this.array[i] === 'object'){
            var nb=0;
            //go check if there is any object in the bigger array
            for(var j = 0; j<this.arr.length; j++) {
                if (typeof this.arr[j] === 'object'){
                    //check if the two objects has all the same keys
                    for(var key in this.array[i]){
                        if(this.array[i][key] === this.arr[j][key]){
                            nb++;
                        }
                    }
                    //if all the keys of the smaller objects equal to the keys of the big one so push the object in the elements array
                    if(nb === Object.keys(this.array[i]).length) {
                        this.elements.push(this.array[i])
                    }
                }
            }
        }

        //if one of the elements is an array
        if (Array.isArray(this.array[i])) {
            //still working on it
        }

        //if the elements are strings or numbers
        for(var j = 0; j<this.arr.length; j++) {
            if(this.array[i] === this.arr[j]) {
                this.elements.push(this.array[i])
            }
        } 
    }
    if(this.elements.length === this.array.length) {
        return true
    }
    return false
};

// var a = new Array(['merge','reset','reset'])
// b.isSubsetOf(['reset','merge','add','commit']) == > Output : true

// var b = new Array(['merge','reset','reset','hahaha'])
// b.isSubsetOf(['reset','merge','add','commit']) == > Output : false

// var c = new Array([{a:5},'haha'])
// c.isSubsetOf(['rest', 'hey', {a:5}, 'not', 'haha']) == > Output : true

// var d = new Array([{a:5},'haha','yeah'])
// c.isSubsetOf(['rest', 'hey', {a:5}, 'not', 'haha']) == > Output : false

// var e = new Arrayy([[5],'haha','yeah'])
// e.isSubsetOf(['rest', 'hey', {a:5}, 'not', 'haha']) == > Output : false