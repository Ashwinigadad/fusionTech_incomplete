
var forderForm = document.getElementById('fOrderForm');

forderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var fruitSelect = document.getElementById('Fruits');
    var fruitInput = document.getElementById('Fquantity');

    var selectedFruit = fruitSelect.value;
    var selectedFquantity = fruitInput.value;

    console.log('Fruit:', selectedFruit);
    console.log('Quantity:', selectedFquantity);
    alert('Ordered successfully!!');
});

var vorderForm = document.getElementById('vOrderForm');

vorderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var vegetableSelect = document.getElementById('Vegetables');
    var vegatableInput = document.getElementById('Vquantity');

    var selectedveg = vegetableSelect.value;
    var selectedVquantity = vegatableInput.value;

    console.log('Vegetable:', selectedveg);
    console.log('Quantity:', selectedVquantity);
    alert('Ordered successfully!!');
});


var gorderForm = document.getElementById('gOrderForm');

gorderForm.addEventListener('submit', function(event) {
     event.preventDefault();

    var grainSelect = document.getElementById('Grains');
    var grainInput = document.getElementById('Gquantity');

    var selectedgrain = grainSelect.value;
    var selectedGquantity = grainInput.value;

    console.log('Fruit:', selectedgrain);
    console.log('Quantity:', selectedGquantity);
    alert('Ordered successfully!!');
});