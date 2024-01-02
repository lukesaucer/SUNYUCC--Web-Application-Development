function orderSubmitted() {

var firstName = document.forms["inputForm"]["fname"].value;
if (firstName == "") {
  window.alert("First Name must be filled out");
return false;
}

var middleInitial = document.forms["inputForm"]["minitial"].value;
if (middleInitial == "") {
  window.alert("Middle Initial must be filled out");
return false;
}

var lastName = document.forms["inputForm"]["lname"].value;
if (lastName == "") {
  window.alert("Last Name must be filled out");
return false;
}

var city = document.forms["inputForm"]["city"].value;
if (city == "") {
  window.alert("City must be filled out");
return false;
}

var zipcode = document.forms["inputForm"]["zipcode"].value;
if(isValidZipcode(zipcode) == false) {
  window.alert("Zipcode is invalid!");
}

var phone = document.forms["inputForm"]["phone"].value;
if(isValidPhone(phone) == false) {
  window.alert("Phone is invalid!");
}

window.alert("Order Submitted!");

}



function copyBillingFunction() {
  var address = document.forms["inputForm"]["address"].value;
  document.forms["inputForm"]["billingAddress"].value = address;
  var city = document.forms["inputForm"]["city"].value;
  document.forms["inputForm"]["billingCity"].value = city;
  var state = document.forms["inputForm"]["states"].value;
  document.forms["inputForm"]["billingStates"].value = states;
  var zipcode = document.forms["inputForm"]["zipcode"].value;
  document.forms["inputForm"]["billingZipcode"].value = zipcode;
  var phone = document.forms["inputForm"]["phone"].value;
  document.forms["inputForm"]["billingPhone"].value = phone;
}



function isValidZipcode(zipcode) {
  var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipcode);
  if (isValid)
    return true;
  else {
    return false;
  }
}

function isValidPhone(phone) {
isValid(zipcode);
  var isValid = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone);
  if (isValid)
    return true;
  else {
    return false;
  }
}
