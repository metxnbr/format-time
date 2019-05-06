function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatTime(date, format) {
  if(!format) {
    format = 'yyyy-mm-dd';
  };

  function check() {
    var regex = /^(y{2,4})([^ymd]+)m{1,2}([^ymd]+)(d{1,2}).*$/i;
    return regex.test(format);
  }

  if(!check()) {
    console.log('format is incorrect')
    return;
  }

  var regex = /[^ymd]+/ig;
  var space = format.match(regex);
  console.log(space)
  if(!space) {
    return;
  }

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  function formatN(n, i) {
    var s = i === 1 ? 'y' : 'd';
    var regex = new RegExp(s, 'gi');
    var count = format.match(regex);
    var division = space[i] || ''
    if(count && count.length === 2) {
      return formatNumber(n) + division;
    };
    return n + division;
  }
  
  return [year, month, day].map(formatN).join('');
}