function ValidateContactForm() {
    var fName = document.contactForm.contactFname;
    var lName = document.contactForm.contactLname;
    var mobile = document.contactForm.contactMobile;
    var email = document.contactForm.contactEmail;
    var address = document.contactForm.contactAddress;
    var validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validCharacter = /^[a-zA-Z_\-]+$/;

    if(fName.value == '' || fName.value == null){
        alert("First name is required");
        return false;
    }
    if(!fName.value.match(validCharacter)){
        alert("Please enter only character or only one word");
        return false;
    }
    if(mobile.value == '' || mobile.value == null){
        alert("Mobile number is required");
        return false;
    }
    if(isNaN(mobile.value)||mobile.value.indexOf(" ")!=-1){
        alert("Please enter valid mobile number");
        return false;
    }
    if(email.value == '' || email.value == null){
        alert("Email is required");
        return false;
    }
    if(!email.value.match(validMail)){
        alert("Please enter valid email address");
        return false;
    }
    if(address.value == '' || address.value == null){
        alert("Address is required");
        return false;
    }
}
