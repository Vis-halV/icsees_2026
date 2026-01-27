document.addEventListener("DOMContentLoaded", () => {
  const committeeMembers = {
  "committees": [
    {
      "id": "fday",
      "title": "CHIEF PATRONS",
      "members": [
        { "name": "Dr. A. C. Muthiah", "role": "Chairman, Governing Council" },
        { "name": "Shri Ashwin C. Muthiah", "role": "Vice Chairman, Governing Council" }
      ]
    },
    {
      "id": "sday",
      "title": "PATRONS",
      "members": [
        { "name": "Dr. M. Sivanandham", "role": "Secretary, SVEHT" },
        { "name": "Dr. S. Ganesh Vaidyanathan", "role": "Principal" },
        { "name": "Dr. K R. Santha", "role": "Vice Principal" }
      ]
    },
    {
      "id": "tday",
      "title": "CONVENER",
      "members": [
        { "name": "Dr.V.Vidhya", "role": "HoD/IT" },
        { "name": "Dr. Sudhakar K Bharatan", "role": "HOD/EE" }
      ]
    },
    {
      "id": "uday",
      "title": "COORDINATORS",
      "members": [
        { "name": "Dr.C.Yaashuwanth", "role": "Professor/IT" },
        { "name": "Dr. N. K. Mohanty", "role": "Professor/EE" },
        { "name": "Dr. S. G. Bharathidasan", "role": "Professor & Asst. HoD/EE"},
        { "name": "Dr. R. Karthikeyan", "role": "Professor/EE"},
        { "name": "Ms.R. Saktheeswari", "role": "AP/IT" },
        { "name": "Mr. V.Ranjith", "role": "AP/IT" },
        { "name": "Dr. K.Suresh", "role": "Asso.Prof/IT" },
        { "name": "Ms. M.Sugacini", "role": "AP/IT" }
      ]
    },
    {
      "id": "xday",
      "title": "EXECUTIVE COMMITTEE",
      "members": [
        { "name": "Prof. J. Venkatesan", "role": "HOD / AUT" },
        { "name": "Prof. E. Nakkeeran", "role": "HOD / BIO" },
        { "name": "Prof. R. Govindarasu", "role": "HOD / CHE" },
        { "name": "Prof. R. Kumutha", "role": "HOD / CVE" },
        { "name": "Prof.S.Ramesh Babu", "role": "HOD / MEC" },
        { "name": "Prof. R. Anitha", "role": "HOD / CSE" },
        { "name": "Prof. N. Kumaratharan", "role": "HOD / ECE" },
        { "name": "Prof. S. Shanmugam", "role": "HOD / MAR" },
        { "name": "Prof. R. Muthukumaraswamy", "role": "HOD / APM" },
        { "name": "Prof. N.R. Sheela", "role": "HOD / APH" },
        { "name": "Prof. S. Stanly", "role": "HOD / ACH" },
        { "name": "Prof. T. Murugavel", "role": "HOD / HSS" }
      ]
    },
    {
      "id": "advisory",
      "title": "ADVISORY COMMITTEE",
      "members": [
        { "name": "Dr. Shanti Swarup K", "role": "Professor, Department Of Electrical Engineering, IIT Madras" },
        { "name": "Dr. S. Arul Daniel", "role": "Professor (HAG), Department of EEE, NIT Trichy" },
        { "name": "Dr. Karthik Pattabiraman", "role": "Professor, Electrical and Computer Engineering, UBC, Canada" },
        { "name": "Dr. Anup Kumar Panda", "role": "Professor and Head, Department of Electrical Engineering, NIT Rourkela" },
        { "name": "Dr. Ar. Arvind", "role": "DGM Project Planning, Ashok Leyland, Chennai" },
        { "name": "Dr. C. Aravind Vaithilingam", "role": "Professor, Taylor’s University" },
        { "name": "Dr. Ranjan Kumar Behera", "role": "Associate Professor, Department of EEE, IIT Patna, India" },
        { "name": "Dr. S. S. Dash", "role": "Professor and Principal, Government College of Engineering, Kalahandi" },
        { "name": "Dr. K. Udhaykumar", "role": "Professor, Department of EEE, Anna University, Chennai" },
        { "name": "Dr. K. Vijaykumar", "role": "Professor and Chairperson, School of EEE, SRM University, Kattankulathur" },
        { "name": "Dr. S. Nanda Kumar", "role": "Deputy Manager, Grid Corporation of India, Chennai" },
        { "name": "Dr. R. Ramesh", "role": "Professor, Department of EEE, CEG, Anna University" },
        { "name": "Dr. K. Prathibanandhi", "role": "Department of EEE, Sri Sairam Engineering College" },
        { "name": "Dr. Narottam Das", "role": "Senior Lecturer, Central Queensland University, Australia" },
        { "name": "Dr. Ashwani Kumar", "role": "Professor, Electrical Engineering, NIT Kurukshetra, Haryana" }
      ]
    },
    {
      "id": "wday",
      "title": "ORGANISING COMMITTEE",
      "sections": [
        {
          "title": "IT Department",
          "members": [
            { "name": "Dr. G. Sumathi", "role": "Prof/IT" },
            { "name": "Dr. V.M. Sivagami", "role": "Prof/IT" },
            { "name": "Dr. N Devi", "role": "Asso.Prof/IT" },
            { "name": "Dr. D. Jayanthi", "role": "Asso.Prof/IT" },
            { "name": "Dr. P. Leela Rani", "role": "Asso.Prof/IT" },
            { "name": "Dr. A. Kala", "role": "Asso.Prof/IT" },
            { "name": "Dr. K. Kiruthika Devi", "role": "Asso.Prof/IT" },
            { "name": "Dr. P. Sharon Femi", "role": "Asso.Prof/IT" },
            { "name": "Dr. A. Indumathi", "role": "Asso.Prof/IT" },
            { "name": "Ms. N. Uma", "role": "AP/IT" }
          ]
        },
        {
          "title": "EE Department",
          "members": [
            { "name": "Dr. R Karthikeyan", "role": "Prof/EE" },
            { "name": "Dr. S G Bharathidasan", "role": "Prof/EE" },
            { "name": "Dr. S. Kumaravel", "role": "Asso.Prof/EE" },
            { "name": "Dr. S. S. Sethuraman", "role": "Asso.Prof/EE" },
            { "name": "Dr. T. Annamalai", "role": "Asso.Prof/EE" },
            { "name": "Dr. S. Arulmozhi", "role": "Asso.Prof/EE" },
            { "name": "Dr. N. Shanmuga Vadivu", "role": "Asso.Prof/EE" },
            { "name": "Dr. C. Venkatesan", "role": "Asso.Prof/EE" },
            { "name": "Dr. D. Amudhavalli", "role": "Asso.Prof/EE" },
            { "name": "Dr. M. Sankar", "role": "Asso.Prof/EE" },
            { "name": "Dr. S. Kumaravel", "role": "Asso.Prof/EE"},
            { "name": "Dr. S. S. Sethuraman", "role": "Asso.Prof/EE" },
            { "name": "Dr. T. Annamalai", "role": "Asso.Prof/EE" },
            { "name": "Dr. S. Arulmozhi", "role": "Asso.Prof/EE" },
            { "name": "Dr. N. Shanmuga Vadivu", "role": "Asso.Prof/EE" },
            { "name": "Dr. C. Venkatesan", "role": "Asso.Prof/EE" },
            { "name": "Dr. D. Amudhavalli", "role": "Asso.Prof/EE" },
            { "name": "Dr. M. Sankar", "role": "Asso.Prof/EE" },
            { "name": "Dr. S. Deepa", "role": "Asso.Prof/EE"}
          ]
        }
      ]
    },
    {
      "id": "student",
      "title": "STUDENT COMMITTEE",
      "members": [
        { "name": "Dinesh Karthik", "role": "Pre-final Year, Web Developer" },
        { "name": "Vishal V", "role": "Pre-final Year, Web Developer" }
      ]
    }
  ]
  };

  const tabsContainer = document.getElementById("committee-tabs");
  const contentContainer = document.getElementById("committee-content");

  const committees = committeeMembers.committees;

  // === Render Tabs ===
  committees.forEach((c, idx) => {
    const tab = document.createElement("li");
    tab.className = `tab-item ${idx === 0 ? "active" : ""}`;
    tab.textContent = c.title;
    tab.dataset.id = c.id;
    tabsContainer.appendChild(tab);
  });

  // === Render Content ===
  function renderContent(id) {
    const committee = committees.find(c => c.id === id);
    contentContainer.innerHTML = "";

    const tabPane = document.createElement("div");
    tabPane.className = "tab-pane active";

    const row = document.createElement("div");
    row.className = "committee-grid";

    if (committee.sections) {
      committee.sections.forEach(section => {
        section.members.forEach(member => {
          row.innerHTML += `
            <div class="committee-member">
              <h3 class="member-name">${member.name}</h3>
              <p class="member-role">${member.role}</p>
            </div>
          `;
        });
      });
    } else if (committee.members) {
      committee.members.forEach(member => {
        row.innerHTML += `
          <div class="committee-member">
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
          </div>
        `;
      });
    }

    tabPane.appendChild(row);
    contentContainer.appendChild(tabPane);
  }

  // === Tab Click ===
  tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item")) {
      document.querySelectorAll(".tab-item").forEach(tab => tab.classList.remove("active"));
      e.target.classList.add("active");
      renderContent(e.target.dataset.id);
    }
  });

  // === Load Default Tab ===
  renderContent(committees[0].id);
});
