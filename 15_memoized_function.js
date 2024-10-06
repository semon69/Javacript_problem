// Task: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.


function memoizedPower(){
    let cache = {};
    return  function power(base, exp){
        let key = `${base}-${exp}`
        for(key in cache){
            return cache[key]
        }
        const result = Math.pow(base, exp)
        cache[key] = result
        return result
    }
}

const result = memoizedPower()
console.log("result", result);
console.log(result(10, 2));





