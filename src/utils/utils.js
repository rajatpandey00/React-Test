export const createdLabelDataForBar = (bars) => {
    const arrayForBars = []
    bars.map(bar => arrayForBars.push({ key: bar, label: `${bar} %`, value: bar, barColor: 'cyan' }))
    return arrayForBars
 }

 export default createdLabelDataForBar