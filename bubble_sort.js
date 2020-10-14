let arr_1 = []
let arr_2 = [1]
let arr_3 = [4,1,3,2]
let arr_4 = [54, 25, 55, 55, 12, 0, -256, -1, 12595834443047903424302947]
let arr_5 = [35, 43, 44, 56, 58, 17, 13, 29, 12, 46, 81, 8, 36, 48, 26, 6, 84, 76, 21, 91, 46, 21, 72, 49, 15, 97, 21, 5, 72, 20, 11, 9, 6, 9, 44, 40, 3, 56, 34, 67, 67, 55, 53, 71, 54, 21, 8, 60, 98, 60, 83, 93, 67, 69, 53, 41, 56, 56, 56, 85, 27, 29, 58, 75, 9, 87, 15, 88, 83, 66, 68, 84, 38, 42, 6, 61, 74, 62, 4, 20, 55, 59, 85, 8, 41, 61, 92, 29, 90, 45, 66, 76, 32, 29, 10, 47, 6, 31, 81, 21]

let test_arrays = [arr_1, arr_2, arr_3, arr_4, arr_5]

let switched = true
let max_index
let before_arrays = ""
let after_arrays = ""

for (let i = 0; i < test_arrays.length; i++) {
    before_arrays += "[" + test_arrays[i] +"] <br>" 
}

document.getElementById("before").innerHTML=before_arrays

for (let j = 0; j < test_arrays.length; j++) {
    if (test_arrays[j].length < 2) {
        continue
    }

    switched = true
    max_index = test_arrays[j].length - 2
    arr = test_arrays[j]
    while (switched == true) {
        switched = false
        for (let k = 0; k < max_index + 1; k++) {
            if (arr[k] > arr[k + 1]) {
                [arr[k], arr[k+1]] = [arr[k + 1], arr[k]]
                switched = true
            }
        }        
    }
}

for (let i = 0; i < test_arrays.length; i++) {
    after_arrays += "[" + test_arrays[i] +"] <br>" 
}

document.getElementById("after").innerHTML = after_arrays