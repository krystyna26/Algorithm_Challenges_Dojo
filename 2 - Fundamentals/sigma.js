function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sigma(5));

  // Ex: sigma(3) = 6 -> (1+2+3)