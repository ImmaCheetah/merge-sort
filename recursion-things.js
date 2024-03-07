// function contains(obj, value) {
//     let x = Object.values(obj).some(val => val === value)
//     return x;
   
// }

// function contains(obj, value) {
//     let tempArr = Object.values(obj)
//     let output = false;

//     tempArr.forEach((index) => {
//       if (index === value) {
//           output = true;
//       }
//     })

//   return output;
// }

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

const object = {
  foo: "hello",
  bar: "goodbye",
  baz: "hey"
}

// console.log(containsHarder(object, "goodbye"))
// console.log(Object.entries(nestedObject));

function contains(obj, value) {
    let output = false;

    if (obj[key])

    for (const key in obj) {
        if (typeof obj === object) {
        // if (obj[key] === value) {
        //     output = true;
        // }
        console.log("object");
    } else {
        console.log('not object')
    }
    return output;
    }
}

function contains2(obj, value) {
    if (Object.keys(obj).length === 0) {
        console.log('empty');
        return 1
    } else {
        Object.keys(obj).forEach((key) => {
            
        })
    }  
}

// contains(nestedObject);
// console.log(typeof nestedObject);

const food = {
    one: {
        plate: 'meatball',
    },
    plate: 'pizza',
}

function findValue(obj, value) {
    let output = false;

    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            for (const secondKey in obj[key]) {
                if (obj[key][secondKey] === value) {
                    output = true;
                }
            }
        } else if (obj[key] === value) {
            output = true;
        }
    }
    return output;
}

function findValue2(obj, value) {
    for (const key in obj) {
        if (obj[key] === value) {
            return true;
        } 

        if (typeof obj[key] === "object") {
            if (findValue2(obj[key], value)) {
                return true;
            } 
        } 
    }
}

// console.log(findValue2(food, 'meatball'));
console.log(findValue2(nestedObject, 44));

let arr = [
    [[5], 3], 
    0, 
    2, 
    ['foo'], 
    [], 
    [4, 
        [5, 6]
    ]
]


function totalNum(array) {
    array.forEach((element) => {
        if (typeof element === "number") {

            return result += 1;
        }

        if (Array.isArray(element)) {
            return result + totalNum(element);
        } 
    })
    return result;
}

// function totalNum2(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         if (typeof array[i] === "number") {
//             console.log(i);
//             return 1
//         }

//         if (Array.isArray(array[i])) {
//             return 1 + totalNum2(array[i]);
//         }
//     }
// }

// console.log(totalNum(arr));


function sumSquares(array) {        
    let result = 0;

    array.forEach((element) => {
        if (typeof element === "number") {

            result += element ** 2;
        }

        if (Array.isArray(element)) {
            result += sumSquares(element)
        }
    })


    // for (let i = 0; i < array.length; i++) {
    //     if (typeof array[i] === "number") {

    //         result += array[i] ** 2;
    //     }

    //     if (Array.isArray(array[i])) {
    //         result += sumSquares(array[i])
    //     }
    // }
    return result;
}

let z = [[4], [6]]
let a = [1,2,3]; 
let b = [[1,2],3]; 
let c = [[[[[[[[[1]]]]]]]]];
let d = [10,[[10],10],[10]];

// console.log(sumSquares(b));

// let result = []
function replicate(times, target) {

    if (times <= 0) {
        return result;
    } else {
        // result.push(replicate(times - 1, target))
        result.push(target)
        replicate(times - 1, target);
    }

    return result;
}

// console.log(replicate(3, 5))

function fibs(num) {
    let result = [0, 1];
 
    // let sum = 0;
    for (let i = 1; i < num; i++) {
        temp = result[i] + result[i-1];
        result.push(temp);
    }

    return result;
}


function fibsRec(num, result = [0, 1]) {
    if (num === 0 || num === 1) {
        return result;
    }
    // let last = result[result.length - 1];
    // let secondLast = result[result.length - 2];
     
    result.push((result[result.length - 1]) + (result[result.length - 2]));
    return fibsRec(num - 1, result);
}
// console.log(fibsRec(8)); 