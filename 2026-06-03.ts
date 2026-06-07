function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    let lastfinishTime = 0;

    const landFinishTime: number[] = [];
    const waterFinishTime: number[] = [];

    const options: { finishTime: number, core: [number, number] }[] = []
    landStartTime.forEach((ele, i) => {
        const duration = ele + landDuration[i]
        landFinishTime.push(duration)
        waterStartTime.forEach((wEle, wIndex) => {
            const wDuration = wEle + waterDuration[wIndex]
            waterFinishTime.push(wDuration)

            // if (duration <= wEle) {
            // console.log(wEle, duration)
            options.push({ finishTime: duration, core: [i, wIndex] })
            // }
        })
    })
    waterStartTime.forEach((ele, i) => {
        const duration = ele + waterDuration[i]
        waterFinishTime.push(duration)

        landStartTime.forEach((lEle, lIndex) => {
            const lDuration = lEle + landDuration[lIndex]

            // if (duration <= lEle) {
            // console.log(wEle, duration)
            options.push({ finishTime: lDuration, core: [i, lIndex] })
            // }
        })

    })
    console.log(options)
    return options.sort((a, b) => a.finishTime - b.finishTime)[0]?.finishTime;

};

// const output = earliestFinishTime([2, 8], [4, 1], [6], [3])
// const output = earliestFinishTime([4, 8], [4, 1], [6, 2], [3, 1])
// const output = earliestFinishTime([5], [3], [1], [10])
// console.log(output, "output")