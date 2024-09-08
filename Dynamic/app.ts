interface PersonalInfo {
  name: string;
  email: string;
}

interface Education {
  school: string;
  degree: string;
  gradYear: string;
}

interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skills {
  skillsList: string;
}

// Get form elements
const form = document.getElementById("resume-form") as HTMLFormElement;

// Event listener for form submission
form?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const gradYear = (document.getElementById("grad-year") as HTMLInputElement)
    .value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const jobTitle = (document.getElementById("job-title") as HTMLInputElement)
    .value;
  const startDate = (document.getElementById("start-date") as HTMLInputElement)
    .value;
  const endDate = (document.getElementById("end-date") as HTMLInputElement)
    .value;
  const description = (
    document.getElementById("description") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Populate resume in real-time
  document.getElementById("resume-name")!.innerText = name;
  document.getElementById("resume-email")!.innerText = email;

  document.getElementById("resume-education")!.innerHTML = `
      <p><strong>${degree}</strong> from ${school}, ${gradYear}</p>
    `;

  document.getElementById("resume-experience")!.innerHTML = `
      <p><strong>${jobTitle}</strong> at ${company} (${startDate} - ${endDate})</p>
      <p>${description}</p>
    `;

  document.getElementById("resume-skills")!.innerHTML = `
      <li>${skills.split(",").join("</li><li>")}</li>
    `;
});
