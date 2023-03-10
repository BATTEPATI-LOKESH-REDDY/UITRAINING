form = document.querySelector('form')
firstname = document.getElementById("firstname");
lastname = document.getElementById("lastname");
emailaddress = document.getElementById("emailaddress");
contactnumber = document.getElementById("contactnumber");
pincode = document.getElementById("pincode")
cardnumber = document.getElementById("cardnumber")
cardexpiry = document.getElementById("cardexpiry")
cvvid = document.getElementById("cvvid")
firstnameerror = document.querySelector("#firstNameError")
lastnameerror = document.querySelector("#lastNameError")
emailaddresserror = document.querySelector("#emailAddressError")
contactnumbererror = document.querySelector("#contactNumberError")
pincodeerror = document.querySelector("#pinCodeError")
cardnumbererror = document.querySelector("#cardNumberError")
cardexpiryerror = document.querySelector("#cardExpiryError")
cvverror = document.querySelector("#cvvError")
const submitButton = document.querySelector('button[type="submit"]');
const fnlnpattern = /^[a-zA-Z]{1,30}$/;
const emailregex = /^[a-zA-Z0-9._]{1,50}@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,6}$/
const contactregex = /^[789]\d{9}$/;
const pincoderegex = /^\d{6}$/;
const cardnumberregex = /^4\d{15}$/
const cardexpiryregex = /^(0[1-9]|1[0-2])\/((20)[2-9][0-9]|[3-9][0-9])$/
const cvvregex = /^\d{3,4}$/
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let formvalid = true;
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const emailaddressvalue = emailaddress.value.trim();
    const contactnumbervalue = contactnumber.value.trim();
    const pincodevalue = pincode.value.trim();
    const cardnumbervalue = cardnumber.value.trim();
    const cardexpiryvalue = cardexpiry.value.trim();
    const cvvidvalue = cvvid.value.trim();
    // firstname validation

    if (firstnamevalue.length === 0) {
        firstnameerror.textContent = "first name is required";
        firstname.setAttribute("style", "border-color:red")
        formvalid = false;

    }
    else if (!fnlnpattern.test(firstnamevalue)) {
        firstnameerror.textContent = "enter the valid firstname"
        firstname.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else {
        firstnameerror.textContent = "";
        firstname.setAttribute("style", "border-color:black")

    }
    // lastname validation

    if (lastnamevalue.length === 0) {
        lastnameerror.textContent = "last name is required";
        lastname.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else if (!fnlnpattern.test(lastnamevalue)) {
        lastnameerror.textContent = "enter the valid lastname"
        lastname.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else {
        lastnameerror.textContent = ""
        lastname.setAttribute("style", "border-color:balck")
    }
    // email validation
    if (emailaddressvalue.length === 0) {
        emailaddresserror.textContent = "email is required"
        emailaddress.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else if (!emailregex.test(emailaddressvalue)) {
        emailaddresserror.textContent = "enter the valid emailaddress"
        emailaddress.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else {
        emailaddresserror.textContent = ""
        emailaddress.setAttribute("style", "border-color:black")
    }
    // contactnumber validation
    if (contactnumbervalue.length === 0) {
        contactnumbererror.textContent = "contact number is required"
        contactnumber.setAttribute("style", "border-color:red")
        formvalid = false
    }
    else if (!contactregex.test(contactnumbervalue)) {
        contactnumbererror.textContent = "enter the valid contact number"
        contactnumber.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else {
        contactnumbererror.textContent = ""
        contactnumber.setAttribute("style", "border-color:black")
    }
    // pincode validation
    if (pincodevalue.length === 0) {
        pincodeerror.textContent = "pincode is required"
        pincode.setAttribute("style", "border-color:red")
        formvalid = false;

    }
    else if (!pincoderegex.test(pincodevalue)) {
        pincodeerror.textContent = "enter the valid pincode"
        pincode.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else {
        pincodeerror.textContent = ""
        pincode.setAttribute("style", "border-color:black")
    }
    // carnumber validation
    if (cardnumbervalue.length == 0) {
        cardnumbererror.textContent = "card number is required"
        cardnumber.setAttribute("style", 'border-color:red');
        formvalid = false;
    }
    else if (cardnumberregex.test(contactnumbervalue)) {
        cardnumbererror.textContent = "enter the valid card number"
        cardnumber.setAttribute("style", 'border-color:red');
        formvalid = false;

    }
    else {
        cardnumbererror.textContent = "";
        cardnumber.setAttribute("style", "border-color:black")
    }
    // cardexpiry validation
    if (cardexpiryvalue.length === 0) {
        cardexpiryerror.textContent = "card expiry is required"
        cardexpiry.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else if (!cardexpiryregex.test(cardexpiryvalue)) {
        cardexpiryerror.textContent = "enter the valid card expiry"
        cardexpiry.setAttribute("style", "border-color:red")
        formvalid = false;


    }
    else {
        cardexpiryerror.textContent = ""
        cardexpiry.setAttribute("style", "border-color:black")
    }
    //cvv validation

    if (cvvidvalue.length === 0) {
        cvverror.textContent = "cvv is required"
        cvvid.setAttribute("style", "border-color:red")
        formvalid = false;
    }
    else if (!cvvregex.test(cvvidvalue)) {
        cvverror.textContent = "enter the valid cvv"
        cvvid.setAttribute("style", "border-color:red")
        formvalid = false;

    }
    else {
        cvverror.textContent = ""
        cvvid.setAttribute("style", "border-color:black")
    }







    if (!formvalid) {
        return;
    }
    form.submit();




})


