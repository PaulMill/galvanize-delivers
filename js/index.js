(function() {
  'use strict';
    $('.button-collapse').sideNav();

    let subtotal = 0;

    let tax = 0;

    let total = 0;
    sumTotal(0); //for 0 before order

//click event for adding items to a list
  $("#burger").on('click', (event) => {
      const listItem = $('.burger h6').text();
      const priceItem = $('#burger').val();
      createListItem(listItem, priceItem);
      sumTotal(priceItem);
    })
  $("#pizza").on('click', (event) => {
      const listItem = $('.pizza h6').text();
      const priceItem = $('#pizza').val();
      createListItem(listItem, priceItem);
      sumTotal(priceItem);
    })
  $("#ribs").on('click', (event) => {
    const listItem = $('.ribs h6').text();
    const priceItem = $('#ribs').val();
    createListItem(listItem, priceItem);
    sumTotal(priceItem);
  })
  $("#iceCream").on('click', (event) => {
    const listItem = $('.iceCream h6').text();
    const priceItem = $('#iceCream').val();
    createListItem(listItem, priceItem);
    sumTotal(priceItem);
  })

//Submit order button event
$('#submitOrder').on('click', (event)=> {
  event.preventDefault();
  if (total !== 0 && validationForm()) {
    Materialize.toast('Order Complete!', 4000)
  } else {
    Materialize.toast('Please fill all required fields', 4000)
  }

})

// checking validation for filling form correctly
function validationForm() {
  const n = $('#name').val();
  const t = $('#phone').val();
  const a = $('#address').val();
  if (n === '' || n === ' ') {
    $('#name').toggleClass('invalid');
  }
  else if(t === '' || t === ' ') {
    $('#phone').toggleClass('invalid');
  }
  else if (a === '' || a === ' ') {
    $('#address').toggleClass('invalid');
  } else {
    return true;
  }
}

//function for showing subtotal tax and total
function sumTotal(priceItem) {
  subtotal += parseFloat(priceItem);
  $('#subtotal').text(`$${subtotal.toFixed(2)}`);
  tax = (subtotal*9.6)/100;
  $('#tax').text(`$${tax.toFixed(2)}`);
  total = subtotal + tax;
  $('#total').text(`$${total.toFixed(2)}`);
}

//function helper to greate a table
function createListItem(listItem, priceItem) {
  const $tableItem = $('<tr>');
  $('<td>').appendTo($tableItem).text(listItem);
  $('<td>').appendTo($tableItem).addClass('right-align').text(`$${priceItem}`);
  $tableItem.appendTo('.listItem');
}

})();
