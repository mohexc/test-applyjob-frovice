
const checkAvailability = (roomId, startTime, endTime) => {

  fetch('./dataRoom.json')
    .then((res) => res.json())
    .then((data) =>
      data.forEach((item) => {
        if (roomId === item.roomId) {
          if (Date.parse(item.startTime) < Date.parse(startTime) < Date.parse(item.endTime))
            return console.log(`false startTime`)
          if (Date.parse(item.startTime) < Date.parse(endTime) < Date.parse(item.endTime))
            return console.log(`false endTime`)
          return console.log(`${item.roomId} : true`)
        }
      }))
}


const a1 = "A101"
const a2 = "A102"
const a3 = "Auditorium"

// checkAvailability(a2, "2019-01-29 16:00:00", "2019-10-04 18:00:00")

const getBookingsForWeek = (roomId) => {
  fetch('./dataRoom.json')
    .then((res) => res.json())
    .then((data) =>
      data.filter(item => item.roomId === roomId)
    )
}

console.log(getBookingsForWeek(a1))

