/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    let employeeInfo
    return employeeInfo = {
       firstName: array[0],
       familyName: array[1],
       title: array[2],
       payPerHour: array[3],
       timeInEvents: [],
       timeOutEvents: [],
    }
}

function createEmployeeRecords(employee){
    return employee.map(function(array){
        return createEmployeeRecord(array)
    })
}

function createTimeInEvent(dateStamp){

    let [date, hour] = dateStamp.split(" ")
    let timeData = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    }
    this.timeInEvents.push(timeData)
    return this 
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    let timeData = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    }
    this.timeOutEvents.push(timeData)
    return this 
}

function hoursWorkedOnDate(dateSpecific){
    let start = this.timeInEvents.find(function(e){
        return e.date === dateSpecific
    })

    let end = this.timeOutEvents.find(function(e) {
        return e.date === dateSpecific
    })

    return (end.hour - start.hour) / 100 
}

function wagesEarnedOnDate(dateSpecific){
    let wages = this.payPerHour * hoursWorkedOnDate.call(this, dateSpecific)
    return parseFloat(wages.toString())
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(function(e){
        return e.firstName === firstName
    })
}

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}