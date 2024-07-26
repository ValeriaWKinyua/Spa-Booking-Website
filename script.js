function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;
    var date = document.getElementById("date").value;
    var request = document.getElementById("request").value;

    if (name === "" || email === "" || service === "" || date === "") {
        alert("Please fill in all fields.");
        return false;
    }

    
    alert("Form submitted successfully!");
    return true;
}


function bookAppointment() {
    alert("Appointment booked successfully!");
    document.getElementById("appointmentForm").reset();
}

function checkAnswer() {
    alert("Checking quiz answer...");
}



