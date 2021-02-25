new Set([1,1,2,2,3,4]) // Creates a new Set object.

[...new Set("referee")].join("") // ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// creates two entries which refernece's two array's with a boolean

const hasDuplicate = (arr) => {
    return new Set(arr).size !== arr.length
}

const vowelCount = (str) => {
    let chars = str.toLowerCase().split('')
    let vowelList = ['a','e','i','o','u']
    let obj = new Map()
    for (let char of chars)
    {
        if (vowelList.includes(char))
        {
            if (obj.has(char))
            {
                obj.set(char, obj.get(char) + 1)
            }
            else
            {
                obj.set(char, 1)
            }
        }
    }
    return obj
}