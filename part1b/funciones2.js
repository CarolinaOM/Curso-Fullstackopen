const square = p => {
    console.log(p)
    return p * p
  }

  const t = [1, 2, 3]
  const tSquared = t.map(p => p * p)
  // tSquared ahora es [1, 4, 9]

  function product(a, b) {
    return a * b
  }
  
  /*const result = product(2, 6)*/
  // result ahora es 12

  const average = function(a, b) {
    return (a + b) / 2
  }
  
  const result = average(2, 5)
  // result ahora es 3.5