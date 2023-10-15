function load(id){
  window.open("./"+id+".html", "_self");
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendMail(manufacturer, model, modelYear, additionalMessage) {
  var link = "mailto:amarpivcic@gmail.com"
           + "&subject=" + encodeURIComponent("Custom order of: "+modelYear+" "+manufacturer+" "+model)
           + "&body=" + encodeURIComponent(additionalMessage);
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
    sendMail(manufacturer.value, model.value, modelYear.value, additionalMessage.value);
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
