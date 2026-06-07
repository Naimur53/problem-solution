// function totalWaviness(num1: number, num2: number): number {
//     let count = 0 
//     for (let i = 101 < num1 ? num1 : 101; i <= num2; i++) {
//         let subString = (i).toString()
//         for (let j = 1; j <= subString.length - 2; j++) {
//             const mainNumber = Number(subString[j])
//             const leftNumber = Number(subString[j - 1])
//             const rightNumber = Number(subString[j + 1])
//             const extraRightNumber = Number(subString[j + 2]) ?? -1
//             const hasExtraNumber = extraRightNumber > -1
//             // if right number is same to current
//             if (rightNumber === mainNumber) {
//                 ++j
//                 continue
//             }
//             if (leftNumber < mainNumber && mainNumber > rightNumber) {
//                 ++count
//                 if (hasExtraNumber && rightNumber < extraRightNumber) {
//                     ++count
//                     ++j
//                 } else if (hasExtraNumber && rightNumber > extraRightNumber) {
//                     ++j
//                 }
//             }
//             else if (leftNumber > mainNumber && mainNumber < rightNumber) {
//                 count++
//                 if (hasExtraNumber && rightNumber > extraRightNumber) {
//                     ++j
//                     count++
//                 } else if (hasExtraNumber) {
//                     ++j
//                 }
//             }
//         }


//     }

//     return count

// };
// function totalWaviness(num1: number, num2: number): number {
//     let count = 0
//     for (let i = 101 < num1 ? num1 : 101; i <= num2; i++) {
//         let subString = (i).toString()
//         let prePreNum = Number(subString[0])
//         let preNum = Number(subString[1])
//         for (let j = 2; j <= subString.length - 1; j++) {
//             const currentNum = Number(subString[j])
//             // if (preNum === prePreNum || preNum === currentNum) {
//             //     j++;
//             //     prePreNum = preNum
//             //     preNum = currentNum
//             //     continue;
//             // }

//             //    only check does the preNum makes wave with prePreNum and currentNum ss
//             if ((preNum > prePreNum && preNum > currentNum) || (preNum < prePreNum && preNum < currentNum)) {
//                 count++;

//             }

//             prePreNum = preNum
//             preNum = currentNum
//         }


//     }

//     return count

// };
function totalWaviness(num1: number, num2: number) {
    let answer = 0;

    for (let num = num1; num <= num2; num++) {
        const s = String(num);

        if (s.length < 3) {
            continue;
        }

        for (let i = 1; i < s.length - 1; i++) {
            if (s[i] > s[i - 1] && s[i] > s[i + 1]) {
                answer++;
            }
            else if (s[i] < s[i - 1] && s[i] < s[i + 1]) {
                answer++;
            }
        }
    }

    return answer;
}


// function totalWaviness(num1: number, num2: number): number {
//     let count = 0
//     let startNumber = num1
//     if (num1 <= 100) {
//         startNumber = 101
//     }
//     let subString = startNumber.toString()
//     let { nCount, wasLastCount } = checkWavinesInNumber(subString)
//     count += nCount;


//     let cachedSecondLastnum = Number(subString[subString.length - 2])
//     let cachedThirdLastnum = Number(subString[subString.length - 3])
//     for (let i = startNumber + 1; i <= num2; i++) {
//         subString = (i).toString()

//         const thisLastNum = Number(subString[subString.length - 1])
//         const thisSecondLastNum = Number(subString[subString.length - 2])
//         if (thisSecondLastNum !== cachedSecondLastnum) {
//             const { nCount: newNCount, wasLastCount: newWasLastCount } = checkWavinesInNumber(subString)
//             nCount = newNCount;
//             wasLastCount = newWasLastCount;
//             cachedSecondLastnum = Number(subString[subString.length - 2])
//             cachedThirdLastnum = Number(subString[subString.length - 3])
//             count = count + nCount

//         } else {
//             // only check last number
//             if ((thisLastNum > cachedSecondLastnum && cachedSecondLastnum < cachedThirdLastnum) || (thisLastNum < cachedSecondLastnum && cachedSecondLastnum > cachedThirdLastnum)) {
//                 if (wasLastCount) {

//                     count += nCount
//                 } else {
//                     count += (nCount + 1)
//                 }
//                 wasLastCount = true
//             } else {
//                 wasLastCount = false
//             }
//         }



//     }

//     return count

// };

function checkWavinesInNumber(subString: string): { nCount: number, wasLastCount: boolean } {
    let nCount = 0
    let prePreNum = Number(subString[0])
    let preNum = Number(subString[1])
    let wasLastCount = false
    for (let j = 2; j <= subString.length - 1; j++) {
        const currentNum = Number(subString[j])
        // if (preNum === prePreNum || preNum === currentNum) {
        //     j++;
        //     prePreNum = preNum
        //     preNum = currentNum
        //     continue;
        // }

        //    only check does the preNum makes wave with prePreNum and currentNum ss
        if ((preNum > prePreNum && preNum > currentNum) || (preNum < prePreNum && preNum < currentNum)) {
            nCount++;
            wasLastCount = true
        } else {
            wasLastCount = false
        }

        prePreNum = preNum
        preNum = currentNum
    }
    return { nCount, wasLastCount }
};
// performance in miliseconds
const performanceStart = performance.now()
// const output = totalWaviness(101, 110)
const output = totalWaviness(1276248, 9495506)
const perfomanceEnd = performance.now()
console.log({ output }, perfomanceEnd - performanceStart, 'perfomance in miliseconds')