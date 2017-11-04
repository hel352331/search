var str = 'hello';
var i = 0;
var answer = prompt('Input one letter');
while (i < str.length) {
    if (str[i] == answer) {
      alert('Your letter is on the ' + (i+1) + '  place');
      break;
    }
    i++;
  }
  if (str[i] != answer ){
    alert('There is no such letter: -1');
  }
