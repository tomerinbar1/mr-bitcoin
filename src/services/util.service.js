export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  loadFromStorage,
  saveToStorage,
  padNum,
  getDayName,
  // getMonthName,
  getMonthsLabels,
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function padNum(num) {
  return num > 9 ? num + '' : '0' + num
}

// function getDayName(date, locale) {
//   date = new Date(date)
//   return date.toLocaleDateString(locale, { weekday: 'long' })
// }

function getDayName(date) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return dayNames[date]
}

function getMonthName(month) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return monthNames[month]
}

function getMonthsLabels(range = '1year') {
  const labels = []
  const todayDate = new Date()
  const month = todayDate.getMonth()

  if (range === '1year') {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    labels.push(...monthNames)
  } else if (range === '6months') {
    for (let i = 0; i < 6; i++) {
      const currMonth = (month + i) % 12
      const monthName = getMonthName(currMonth)
      labels.push(monthName)
    }
  } else if (range === '1months') {
    const currMonth = month % 12
    const monthName = getMonthName(currMonth)
    labels.push(monthName)

    const lastDay = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0).getDate()
    const startDate = lastDay >= 28 ? lastDay - 27 : 1
    for (let i = startDate; i <= lastDay; i++) {
      labels.push(`${monthName} ${i}`)
    }
  } else if (range === '3months') {
    for (let i = 0; i < 3; i++) {
      const currMonth = (month + i) % 12
      const monthName = getMonthName(currMonth)
      labels.push(monthName)
    }
  } else if (range === '1week') {
    for (let i = 0; i < 7; i++) {
      const day = (todayDate.getDay() + i) % 7
      const dayName = getDayName(day)
      labels.push(dayName)
    }
  } else if (range === '24hours') {
    for (let i = 0; i < 24; i++) {
      const hour = (todayDate.getHours() + i) % 24
      const hourString = hour < 10 ? `0${hour}:00` : `${hour}:00`
      labels.push(hourString)
    }
  }

  return labels
}


// Testing the outputs
// console.log(getMonthsLabels('1year'))
// console.log(getMonthsLabels('6months'))
// console.log(getMonthsLabels('3months'))
// console.log(getMonthsLabels('1months'))
// console.log(getMonthsLabels('1week'))
// console.log(getMonthsLabels('24hours'))
