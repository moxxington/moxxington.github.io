let sales = document.querySelector('#sales')
let cosd = document.querySelector('#cosd')
let days = document.querySelector('#daysOpen')
let hours = document.querySelector('#hoursOpen')
let goal = document.querySelector('#goal')

// Select button
const buttonCalc = document.querySelector('.btn-cta')
const buttonReset = document.querySelector('.btn-reset')

// Event listeners
buttonCalc.addEventListener('click', calculateGoals)
buttonReset.addEventListener('click', resetValues)

// Calculate each input value
function calculateGoals () {
  // Grab all input values
  let salesValue = parseInt(sales.value)
  let cosdValue = parseFloat(cosd.value)
  let daysValue = parseFloat(days.value)
  let hoursValue = parseFloat(hours.value)
  let goalValue = parseFloat(goal.value)
  
  // Select all outputs
  let weeklySales = document.querySelector('#weeklySales')
  let dailySales = document.querySelector('#dailySales')
  let hourlySales = document.querySelector('#hourlySales')
  let halfHourSales = document.querySelector('#halfHourSales')
  
  let weeklyCOSD = document.querySelector('#weeklyCOSD')
  let dailyCOSD = document.querySelector('#dailyCOSD')
  let hourlyCOSD = document.querySelector('#hourlyCOSD')
  let halfHourCOSD = document.querySelector('#halfHourCOSD')
  
  const weeklySalesGoal = salesValue * (1 + goalValue)
  const dailySalesGoal = (weeklySalesGoal - salesValue) / daysValue
  const weeklyCOSDGoal = cosdValue * (1 + goalValue)
  const dailyCOSDGoal = weeklyCOSDGoal - cosdValue
  
  // Calculate Sales Goals
  weeklySales.value = weeklySalesGoal.toFixed(2)
  dailySales.value = dailySalesGoal.toFixed(2)
  hourlySales.value = (dailySalesGoal / hoursValue).toFixed(2)
  halfHourSales.value = (dailySalesGoal / hoursValue / 2).toFixed(2)
  
  // Calculate COSD Goals
  weeklyCOSD.value = weeklyCOSDGoal.toFixed(2)
  dailyCOSD.value = dailyCOSDGoal.toFixed(2)
  hourlyCOSD.value = (dailyCOSDGoal / hoursValue).toFixed(2)
  halfHourCOSD.value = (dailyCOSDGoal / hoursValue / 2).toFixed(2)
}

// Reset input values
function resetValues () {
  
  sales.value = ''
  cosd.value = ''
  days.value = ''
  hours.value = ''
  goal.value = ''

  weeklySales.value = ''
  dailySales.value = ''
  hourlySales.value = ''
  halfHourSales.value = ''

  weeklyCOSD.value = ''
  dailyCOSD.value = ''
  hourlyCOSD.value = ''
  halfHourCOSD.value = ''
}


function cracklePop() {
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('CracklePop')
    } else if(i % 3 === 0) {
      console.log('Crackle')
    } else if (i % 5 === 0) {
      console.log('Pop')
    } else {
      console.log(i)
    }
  }
}