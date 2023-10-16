function load(id){
  window.open("./"+id+".html", "_self");
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendMail(manufacturer, model, modelYear, additionalMessage,fName,lName,phoneNumber,eMail) {
  var link = "mailto:amarpivcic@gmail.com"
           + "?subject=" + encodeURIComponent("Custom order of: "+modelYear+" "+manufacturer+" "+model)
           + "&body=Name: "+fName +" "+lName+" Phone number and mail: "+phoneNumber+" "+eMail+" Additional message: " + encodeURIComponent(additionalMessage);
  window.location.href = link;
}

function submit()
{
  var fName=document.getElementById("firstName");
  var lName=document.getElementById("lastName");
  var eMail=document.getElementById("eMail");
  var phoneNumber=document.getElementById("phoneNumber");
  var manufacturer=document.getElementById("manufacturer");
  var model=document.getElementById("model");
  var modelYear=document.getElementById("modelYear");
  var additionalMessage=document.getElementById("additionalMessage");

  if(validateEmail(eMail.value)==false)
  {
    window.alert("E-Mail is not in valid form!");
    eMail.value='';
  }

  else if(manufacturer.value=="" || model.value=="" || modelYear.value=="")
  {
    window.alert("Manufacturer, model and model year are required!"); 
  }

  else{
    sendMail(manufacturer.value, model.value, modelYear.value, additionalMessage.value, fName.value ,lName.value ,phoneNumber.value ,eMail.value);
    fName.value='';
    lName.value='';
    eMail.value='';
    phoneNumber.value='';
    manufacturer.value='';
    model.value='';
    modelYear.value='';
    additionalMessage.value='';
  }
}

function selectCar(carid)
{
  var carinfo = document.getElementById("carInfo");
  var model = document.getElementById(carid+"model").innerHTML;
  carinfo.value=model;
  window.scrollTo(0, 1000); 
}

function appoint()
{
  var firstName=document.getElementById("firstName");
  var lastName=document.getElementById("lastName");
  var eMail=document.getElementById("eMail");
  var phoneNumber=document.getElementById("phoneNumber");
  var carinfo = document.getElementById("carInfo");
  var date = document.getElementById("date");

  if (carinfo.value=="")
  {
    window.alert("You must select a car!");
  }

  else if(firstName.value=="" || lastName.value=="" || eMail.value=="" || phoneNumber=="")
  {
    window.alert("Personal info is required!"); 
  }

  else if(validateEmail(eMail.value)==false)
  {
    window.alert("E-Mail is not in valid form!");
    eMail.value='';
  }

  else if(date.value=="")
  {
    window.alert("Pick a date!");
  }

  else
  {
    firstName.value='';
    lastName.value='';
    eMail.value='';
    phoneNumber.value='';
    carinfo.value='';
    date.value='';
    window.alert("Reservation succesful! We will reach back to you soon!");
    window.scrollTo(0, 0);
  }
}
