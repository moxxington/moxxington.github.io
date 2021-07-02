// Grab all input values
const sales = parseInt(document.querySelector('#sales').value)
const cosd = parseFloat(document.querySelector('#cosd').value)
const avgtix = parseFloat(document.querySelector('#avgtix').value)
const days = parseFloat(document.querySelector('#daysOpen').value)
const hours = parseFloat(document.querySelector('#hoursOpen').value)
const goal = parseFloat(document.querySelector('#goal').value)

// Select all outputs
let weeklySales = document.querySelector('#weeklySales')
let dailySales = document.querySelector('#dailySales')
let hourlySales = document.querySelector('#hourlySales')
let halfHourSales = document.querySelector('#halfHourSales')

let weeklyCOSD = document.querySelector('#weeklyCOSD')
let dailyCOSD = document.querySelector('#dailyCOSD')
let hourlyCOSD = document.querySelector('#hourlyCOSD')
let halfHourCOSD = document.querySelector('#halfHourCOSD')

// Select button
const buttonCalc = document.querySelector('.btn')

// Event listeners
buttonCalc.addEventListener('click', calculateGoals)

// Calculate each input value
function calculateGoals () {
  const weeklySalesGoal = sales * (1 + goal)
  const dailySalesGoal = (weeklySalesGoal - sales) / 7
  const weeklyCOSDGoal = cosd * (1 + goal)
  const dailyCOSDGoal = (weeklyCOSDGoal - cosd)

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


