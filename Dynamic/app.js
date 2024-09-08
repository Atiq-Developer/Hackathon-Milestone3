// Get form elements
var form = document.getElementById("resume-form");
// Event listener for form submission
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var gradYear = document.getElementById("grad-year")
        .value;
    var company = document.getElementById("company")
        .value;
    var jobTitle = document.getElementById("job-title")
        .value;
    var startDate = document.getElementById("start-date")
        .value;
    var endDate = document.getElementById("end-date")
        .value;
    var description = document.getElementById("description").value;
    var skills = document.getElementById("skills").value;
    // Populate resume in real-time
    document.getElementById("resume-name").innerText = name;
    document.getElementById("resume-email").innerText = email;
    document.getElementById("resume-education").innerHTML = "\n      <p><strong>".concat(degree, "</strong> from ").concat(school, ", ").concat(gradYear, "</p>\n    ");
    document.getElementById("resume-experience").innerHTML = "\n      <p><strong>".concat(jobTitle, "</strong> at ").concat(company, " (").concat(startDate, " - ").concat(endDate, ")</p>\n      <p>").concat(description, "</p>\n    ");
    document.getElementById("resume-skills").innerHTML = "\n      <li>".concat(skills.split(",").join("</li><li>"), "</li>\n    ");
});
