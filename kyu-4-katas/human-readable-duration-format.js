// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    if(seconds === 0){
        return 'now'
    }

    totalMin = Math.floor(seconds / 60)
    remainSec = seconds % 60
    totalHour = Math.floor(totalMin / 60)
    remainMin = totalMin % 60
    totalDay = Math.floor(totalHour / 24)
    remainHour = totalHour % 24
    totalYear = Math.floor(totalDay / 365)
    remainDay = totalDay % 365

    let ans = ''
    remainSec >= 1 ? (remainSec > 1 ? ans += `${remainSec} seconds` : ans += '1 second') : ans += ''
    let outputVars = remainSec >= 1 ? 1 : 0
    
    if(remainMin >= 1){
        if(remainMin > 1){
            ans ? ans = `${remainMin} minutes and ` + ans : ans = `${remainMin} minutes` + ans
        }
        else{
            ans ? ans = `1 minute and ` + ans : ans = `1 minute` + ans
        }
        outputVars ++
    }
    if(remainHour >= 1){
        if(outputVars === 1){
            remainHour > 1 ? ans = `${remainHour} hours and ` + ans : ans = `1 hour and ` + ans 
        }
        else if(remainHour > 1){
            ans ? ans = `${remainHour} hours, ` + ans : ans = `${remainHour} hours` + ans
        }
        else{
            ans ? ans = `1 hour, ` + ans : ans = `1 hour` + ans
        }
        outputVars ++
    }
    if(remainDay >= 1){
        if(outputVars === 1){
            remainDay > 1 ? ans = `${remainDay} days and ` + ans : ans = `1 day and ` + ans 
        }
        else if(remainDay > 1){
            ans ? ans = `${remainDay} days, ` + ans : ans = `${remainDay} days` + ans
        }
        else{
            ans ? ans = `1 day, ` + ans : ans = `1 day` + ans
        }
        outputVars ++
    }
    if(totalYear >= 1){
        if(outputVars === 1){
            totalYear > 1 ? ans = `${totalYear} years and ` + ans : ans = `1 year and ` + ans 
        }
        else if(totalYear > 1){
            ans ? ans = `${totalYear} years, ` + ans : ans = `${totalYear} years` + ans
        }
        else{
            ans ? ans = `1 year, ` + ans : ans = `1 year` + ans
        }
        outputVars ++
    }

    return ans
}

console.log(formatDuration(3662))



///////// 

const FORMATS = {year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1};

function formatDuration (seconds) {
  if (!seconds) return 'now';
  
  const has = Object.entries(FORMATS).reduce((has, [name, value]) => {
    if (seconds < value) return has;

    const count = Math.floor(seconds / value);
    seconds -= value * count;
    return [...has, `${count} ${name}${count === 1 ? '' : 's'}`];
  }, []);
  return has.length === 1 ? has[0] : has.length === 2 ? has.join(' and ') : has.slice(0, -1).join(', ') + ' and ' + has[has.length - 1]
}