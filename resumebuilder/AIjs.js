 function generateResume() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const designation = document.getElementById("designation").value;
    const skills = document.getElementById("skills").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const hobbies = document.getElementById("hobbies").value;

    const summary = `Dedicated ${designation} skilled in ${skills}. Passionate about professional growth and delivering quality results.`;

    document.getElementById("resume").innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <hr>

      <h3>Professional Summary</h3>
      <p>${summary}</p>

      <h3>Skills</h3>
      <p>${skills}</p>

      <h3>Education</h3>
      <p>${education}</p>

      <h3>Experience</h3>
      <p>${experience}</p>

      <h3>Hobbies</h3>
      <p>${hobbies}</p>
    `;
  }

  function downloadPDF() {

    const element = document.getElementById("resume");

    html2pdf().set({
      margin: 10,
      filename: 'resume.pdf',
      html2canvas: {
        scale: 2,
        backgroundColor: '#ffffff'
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    }).from(element).save();
  }