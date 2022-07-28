// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    let strYear = year.toString();
    if(strYear.length < 3){
      return 1;
    }
    else if(strYear.slice(-2) === '00'){
      return Number(strYear.slice(0, (strYear.length - 2)));
    }
    else{
      return Number(strYear.slice(0, (strYear.length - 2))) + 1;
    }
  }

  function centuryTwo(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }