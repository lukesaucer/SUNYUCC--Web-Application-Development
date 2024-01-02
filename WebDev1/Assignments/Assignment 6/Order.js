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
    return false;
  }

  var phone = document.forms["inputForm"]["phone"].value;
  if(isValidPhone(phone) == false) {
    window.alert("Phone is invalid!");
    return false;
  }

  window.alert("Order Submitted!");

  setCookie("fname", firstName, 90);
  setCookie("minitial", middleInitial, 90);
  setCookie("lname", lastName, 90);
  setCookie("city", city, 90);
  setCookie("zipcode", zipcode, 90);
  setCookie("phone", phone, 90);
  setCookie("states", state, 90);

  window.alert("Cookies Saved!");



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

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 *60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie(cname) {
		var cookie = getCookie(cname);
		return cookie;
	}


// check for saved cookies when page first loads
function checkForCookies() {
  checkCookie("fname");
}

window.onload = checkForCookies();
