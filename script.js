// Select button
const buttonCalc = document.querySelector('.btn-cta')
const buttonReset = document.querySelector('.btn-reset')

// Event listeners
buttonCalc.addEventListener('click', calculateGoals)
buttonReset.addEventListener('click', resetValues)

// Calculate each input value
function calculateGoals () {
  // Grab all input values
  let sales = parseInt(document.querySelector('#sales').value)
  let cosd = parseFloat(document.querySelector('#cosd').value)
  let days = parseFloat(document.querySelector('#daysOpen').value)
  let hours = parseFloat(document.querySelector('#hoursOpen').value)
  let goal = parseFloat(document.querySelector('#goal').value)

  // Select all outputs
  let weeklySales = document.querySelector('#weeklySales')
  let dailySales = document.querySelector('#dailySales')
  let hourlySales = document.querySelector('#hourlySales')
  let halfHourSales = document.querySelector('#halfHourSales')

  let weeklyCOSD = document.querySelector('#weeklyCOSD')
  let dailyCOSD = document.querySelector('#dailyCOSD')
  let hourlyCOSD = document.querySelector('#hourlyCOSD')
  let halfHourCOSD = document.querySelector('#halfHourCOSD')

  const weeklySalesGoal = sales * (1 + goal)
  const dailySalesGoal = (weeklySalesGoal - sales) / days
  const weeklyCOSDGoal = cosd * (1 + goal)
  const dailyCOSDGoal = weeklyCOSDGoal - cosd

  // Calculate Sales Goals
  weeklySales.value = weeklySalesGoal
  dailySales.value = dailySalesGoal
  hourlySales.value = (dailySalesGoal / hours).toFixed(2)
  halfHourSales.value = (dailySalesGoal / hours / 2).toFixed(2)

  // Calculate COSD Goals
  weeklyCOSD.value = weeklyCOSDGoal
  dailyCOSD.value = dailyCOSDGoal
  hourlyCOSD.value = (dailyCOSDGoal / hours).toFixed(2)
  halfHourCOSD.value = (dailyCOSDGoal / hours / 2).toFixed(2)
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
