(function () {
  function formatTime(date, format) {
    if (!format) {
      format = 'yyyy-mm-dd';
    };

    var nums = format.match(/y+|m+|d+/ig);
    var divisions = format.match(/[^ymd]+/ig);

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var order = nums.map(function (item) {
      if (/^y+$/i.test(item)) {
        return year
      };

      if (/^m+$/i.test(item)) {
        return month
      };

      if (/^d+$/i.test(item)) {
        return day
      }
    });

    function addZero(count) {
      var i = 0;
      var s = '';
      while (count > i) {
        s = + '0'
        i += 1;
      }
      return s
    }

    function formatNumber(n, i) {
      n = n.toString()

      var divide = divisions && divisions[i] || '';
      var type = nums[i];

      if (/^y+$/i.test(type)) {
        n = n.slice(n.length - type.length);
      };

      if (/^[md]+$/i.test(type)) {
        const zeros = addZero(type.length - n.length)
        n = zeros + n;
      };

      return n + divide;
    }

    return order.map(formatNumber).join('');
  }

  if (typeof module !== 'undefined' && module.exports) {
    formatTime.default = formatTime;
    module.exports = formatTime;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define('formatTime', [], function () {
      return formatTime;
    });
  } else {
    window.formatTime = formatTime;
  }
})();
