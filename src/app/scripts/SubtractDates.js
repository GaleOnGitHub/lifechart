let addMonths = (date, num) => date.setMonth(date.getMonth() + num)

const SubtractDates = function(date2, date1){
  //create or copy dates
  const d1 = new Date(date1),
        d2 = new Date(date2)
  //validate
  if(isNaN(d1.valueOf()) || isNaN(d2.valueOf())){
    let error = "Date-Subtraction: Invalid date input. Could not convert value into date. Try creating date objects before subtracting."
    console.log(error)
    return
  }
  
  return new Difference(d1,d2)
}

const Difference = function(_from, _to){
  const fd = new Date(_from)
  const td = new Date(_to)

  const MS_PER = {
    DAY: 86400000, // 1000 * 60 * 60 * 24
    HOUR: 3600000, // 1000 * 60 * 60
    MINUTE: 60000, // 1000 * 60
    SECOND:  1000, // 1000
  }

  //Calculate number of complete months between to dates
  const diffInMonths = (d2,d1) => {
    let months = ((d2.getYear() - d1.getYear()) * 12) + (d2.getMonth() - d1.getMonth())
    //add months to first date and check whether to include current month
    const dateCheck  = new Date(d1)
    addMonths(dateCheck, months)
    if(d2 - dateCheck < 0){
      --months
    }
    return months
  }

  function toUnit(unit){
    const totalMonths = diffInMonths(td,fd),
          ms = td - fd
    
    switch(unit){
      case 'years'  :return Math.floor(totalMonths / 12)
      case 'months' :return Math.floor(totalMonths)
      case 'weeks'  :return Math.floor(ms / MS_PER.DAY / 7)
      case 'days'   :return Math.floor(ms / MS_PER.DAY)
      case 'hours'  :return Math.floor(ms / MS_PER.HOUR)
      case 'minutes':return Math.floor(ms / MS_PER.MINUTE)
      case 'seconds':return Math.floor(ms / MS_PER.SECOND)
      case 'milisecons':return ms
      default : 
        let error = "toUnit: unknown unit name, "+ unit
        console.log(error)
        return
    }
  }
  
  this.toYears   = () => { return toUnit('years')}
  this.toMonths  = () => { return toUnit('months')}
  this.toWeeks   = () => { return toUnit('weeks')}
  this.toDays    = () => { return toUnit('days')}
  this.toHours   = () => { return toUnit('hours')}
  this.toMinutes = () => { return toUnit('minutes')}
  this.toSeconds = () => { return toUnit('seconds')}
  this.toMiliseconds = () => { return toUnit('miliseconds')}
}

export default SubtractDates