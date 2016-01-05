var sum = 0;

function insertCoin(coin) {
  sum += coin;
  document.getElementById("sum").innerHTML = "Oбщо вкарана сума " + sum.toFixed(2);
};



var change = 0;

function orderCoffee(price) {
  sum -= price;
  if (sum < 0) {
    document.getElementById("change").innerHTML = "Наличната сума не е достатъчна! Вземете вашето ресто!" ;
  } else {
    document.getElementById("change").innerHTML = "Вашата напитка се приготвя " + setTimeout(moreDrinks, 2000);
  }
};

function moreDrinks() {
  document.getElementById("change").innerHTML = "Можете да поръчате още напитки за оставащатата ви сума от "+ "<br>" + sum.toFixed(2) + 
  "<br>" + " или да получите рестото си, чрез бутона 'Вземи ресто'";
};


function takeChange() {
  if (sum > 0) {
    document.getElementById("change").innerHTML = "Вземете вашето ресто от " + sum.toFixed(2);
  }
  setTimeout(clear, 2000);
};



function clear() {
  location.reload()
};