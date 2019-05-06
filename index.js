function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatTime(date, format) {
  if(!format) {
    format = 'YYYY-MM-DD';
  };

  function check() {
    var regex = /^(Y{2,4})([^YMD]+)M{1,2}([^YMD]+)(D{1,2})$/i;
    return regex.test(format);
  }

  if(!check()) {
    console.log('format is incorrect')
    return;
  }

  var regex = /[^YMD]+/i;
  var space = format.match(regex);
  if(!space) {
    return;
  }

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  function formatN(n, i) {
    var s = i === 1 ? 'M' : 'D';
    var regex = new RegExp(s, 'gi');
    var count = format.match(regex);
    if(count && count.length === 2) {
      return formatNumber(n);
    };
    return n
  }
  
  return [year, month, day].map(formatN).join(space);
}