document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        feedback: document.getElementById("feedback").value
    };

    fetch("http://ALB_DNS_NAME/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("responseMsg").innerText = result;
        document.getElementById("feedbackForm").reset();
    })
    .catch(error => {
        document.getElementById("responseMsg").innerText = "Error submitting feedback";
        console.error(error);
    });
});

