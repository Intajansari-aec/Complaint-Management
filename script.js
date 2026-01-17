const form = document.getElementById("complaintForm");
const complaintList = document.getElementById("complaintList");

// Load complaints from LocalStorage
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

// Display complaints
function displayComplaints() {
    complaintList.innerHTML = "";

    complaints.forEach((item) => {
        const div = document.createElement("div");
        div.className = "complaint-card";
        div.innerHTML = `
            <strong>Name:</strong> ${item.name}<br>
            <strong>Category:</strong> ${item.category}<br>
            <strong>Complaint:</strong> ${item.complaint}<br>
            <strong>Status:</strong> Pending
        `;
        complaintList.appendChild(div);
    });
}

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const complaintText = document.getElementById("complaint").value;

    const complaintData = {
        name: name,
        category: category,
        complaint: complaintText
    };

    complaints.push(complaintData);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    form.reset();
    displayComplaints();
});

// Initial display
displayComplaints();
