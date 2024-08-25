const doctors = {
    cardiologist: [
        { name: "Dr. Aditi Sharma", mobile: "+91 99887 22345", email: "aditi.sharma@example.com" },
        { name: "Dr. Anil Kumar", mobile: "+91 94567 33445", email: "anil.kumar@example.com" },
        { name: "Dr. Priya Yadav", mobile: "+91 91234 55667", email: "priya.yadav@example.com" },
        { name: "Dr. Rajesh Gupta", mobile: "+91 98765 22334", email: "rajesh.gupta@example.com" }
    ],
    dermatologist: [
        { name: "Dr. Meera Rao", mobile: "+91 99887 33456", email: "meera.rao@example.com" },
        { name: "Dr. Rohit Sharma", mobile: "+91 94567 55678", email: "rohit.sharma@example.com" },
        { name: "Dr. Pooja Verma", mobile: "+91 91234 66778", email: "pooja.verma@example.com" },
        { name: "Dr. Sandeep Patel", mobile: "+91 98765 55667", email: "sandeep.patel@example.com" }
    ],
    'ent-specialist': [
        { name: "Dr. Neelam Singh", mobile: "+91 99887 22334", email: "neelam.singh@example.com" },
        { name: "Dr. Vikram Mehta", mobile: "+91 94567 33456", email: "vikram.mehta@example.com" },
        { name: "Dr. Ananya Gupta", mobile: "+91 91234 55678", email: "ananya.gupta@example.com" },
        { name: "Dr. Rekha Patel", mobile: "+91 98765 77888", email: "rekha.patel@example.com" }
    ],
    gastroenterologist: [
        { name: "Dr. Asha Reddy", mobile: "+91 99887 33445", email: "asha.reddy@example.com" },
        { name: "Dr. Deepak Sharma", mobile: "+91 94567 55667", email: "deepak.sharma@example.com" },
        { name: "Dr. Neeta Yadav", mobile: "+91 91234 77889", email: "neeta.yadav@example.com" },
        { name: "Dr. Arjun Patel", mobile: "+91 98765 22345", email: "arjun.patel@example.com" }
    ],
    geriatrics: [
        { name: "Dr. Anu Kapoor", mobile: "+91 94567 33445", email: "anu.kapoor@example.com" },
        { name: "Dr. Rajiv Kumar", mobile: "+91 91234 22345", email: "rajiv.kumar@example.com" },
        { name: "Dr. Sangeeta Sharma", mobile: "+91 98765 99887", email: "sangeeta.sharma@example.com" },
        { name: "Dr. Vikram Mehta", mobile: "+91 99887 55667", email: "vikram.mehta@example.com" }
    ],
    gynecologist: [
        { name: "Dr. Aarti Mehta", mobile: "+91 99887 33455", email: "aarti.mehta@example.com" },
        { name: "Dr. Rekha Sharma", mobile: "+91 94567 55667", email: "rekha.sharma@example.com" },
        { name: "Dr. Swati Gupta", mobile: "+91 91234 66788", email: "swati.gupta@example.com" },
        { name: "Dr. Neha Patel", mobile: "+91 98765 22334", email: "neha.patel@example.com" }
    ],
    neurologist: [
        { name: "Dr. Sanjay Yadav", mobile: "+91 99887 55667", email: "sanjay.yadav@example.com" },
        { name: "Dr. Priya Jain", mobile: "+91 94567 66778", email: "priya.jain@example.com" },
        { name: "Dr. Arjun Mehta", mobile: "+91 91234 55667", email: "arjun.mehta@example.com" },
        { name: "Dr. Neelam Kapoor", mobile: "+91 98765 44556", email: "neelam.kapoor@example.com" }
    ],
    nutritionist: [
        { name: "Dr. Aisha Ali", mobile: "+91 99887 66777", email: "aisha.ali@example.com" },
        { name: "Dr. Rohan Sharma", mobile: "+91 94567 33445", email: "rohan.sharma@example.com" },
        { name: "Dr. Meera Rao", mobile: "+91 91234 99887", email: "meera.rao@example.com" },
        { name: "Dr. Kiran Patel", mobile: "+91 98765 22334", email: "kiran.patel@example.com" }
    ],
    'orthopedic-surgeon': [
        { name: "Dr. Sanjay Bhatia", mobile: "+91 94567 55678", email: "sanjay.bhatia@example.com" },
        { name: "Dr. Priya Kapoor", mobile: "+91 91234 77890", email: "priya.kapoor@example.com" },
        { name: "Dr. Rajesh Patel", mobile: "+91 98765 66789", email: "rajesh.patel@example.com" },
        { name: "Dr. Anita Mehta", mobile: "+91 99887 22334", email: "anita.mehta@example.com" }
    ],
    otolaryngologist: [
        { name: "Dr. Suresh Kumar", mobile: "+91 99887 33445", email: "suresh.kumar@example.com" },
        { name: "Dr. Aarti Sharma", mobile: "+91 94567 55667", email: "aarti.sharma@example.com" },
        { name: "Dr. Neelam Patel", mobile: "+91 91234 55667", email: "neelam.patel@example.com" },
        { name: "Dr. Vikram Gupta", mobile: "+91 98765 22334", email: "vikram.gupta@example.com" }
    ],
    pediatrician: [
        { name: "Dr. Neelam Rao", mobile: "+91 99887 22333", email: "neelam.rao@example.com" },
        { name: "Dr. Amit Gupta", mobile: "+91 94567 22334", email: "amit.gupta@example.com" },
        { name: "Dr. Suman Kumar", mobile: "+91 91234 77889", email: "suman.kumar@example.com" },
        { name: "Dr. Ananya Patel", mobile: "+91 98765 22345", email: "ananya.patel@example.com" }
    ],
    'plastic-surgeon': [
        { name: "Dr. Rajeev Patel", mobile: "+91 99887 55666", email: "rajeeve.patel@example.com" },
        { name: "Dr. Anjali Singh", mobile: "+91 94567 77889", email: "anjali.singh@example.com" },
        { name: "Dr. Rakesh Sharma", mobile: "+91 91234 55666", email: "rakesh.sharma@example.com" },
        { name: "Dr. Pooja Gupta", mobile: "+91 98765 33445", email: "pooja.gupta@example.com" }
    ],
    psychiatrist: [
        { name: "Dr. Arvind Kumar", mobile: "+91 99887 55678", email: "arvind.kumar@example.com" },
        { name: "Dr. Sneha Jain", mobile: "+91 94567 33456", email: "sneha.jain@example.com" },
        { name: "Dr. Manish Gupta", mobile: "+91 91234 55667", email: "manish.gupta@example.com" },
        { name: "Dr. Nisha Patel", mobile: "+91 98765 77888", email: "nisha.patel@example.com" }
    ],
    pulmonologist: [
        { name: "Dr. Vikram Mehta", mobile: "+91 99887 33445", email: "vikram.mehta@example.com" },
        { name: "Dr. Rekha Sharma", mobile: "+91 94567 77889", email: "rekha.sharma@example.com" },
        { name: "Dr. Arjun Gupta", mobile: "+91 91234 55678", email: "arjun.gupta@example.com" },
        { name: "Dr. Aarti Rao", mobile: "+91 98765 99877", email: "aarti.rao@example.com" }
    ],
    radiologist: [
        { name: "Dr. Mohit Agarwal", mobile: "+91 99887 55678", email: "mohit.agarwal@example.com" },
        { name: "Dr. Pooja Sharma", mobile: "+91 94567 33456", email: "pooja.sharma@example.com" },
        { name: "Dr. Rajesh Jain", mobile: "+91 91234 66789", email: "rajesh.jain@example.com" },
        { name: "Dr. Aarti Patel", mobile: "+91 98765 33445", email: "aarti.patel@example.com" }
    ],
    rheumatologist: [
        { name: "Dr. Ravi Mehta", mobile: "+91 99887 33456", email: "ravi.mehta@example.com" },
        { name: "Dr. Priya Verma", mobile: "+91 94567 55677", email: "priya.verma@example.com" },
        { name: "Dr. Anil Sharma", mobile: "+91 91234 55667", email: "anil.sharma@example.com" },
        { name: "Dr. Neelam Patel", mobile: "+91 98765 22334", email: "neelam.patel@example.com" }
    ],
    'sports-medicine': [
        { name: "Dr. Rajeev Patel", mobile: "+91 99887 55667", email: "rajeeve.patel@example.com" },
        { name: "Dr. Anjali Mehta", mobile: "+91 94567 77888", email: "anjali.mehta@example.com" },
        { name: "Dr. Rakesh Gupta", mobile: "+91 91234 55667", email: "rakesh.gupta@example.com" },
        { name: "Dr. Pooja Sharma", mobile: "+91 98765 33456", email: "pooja.sharma@example.com" }
    ],
    urologist: [
        { name: "Dr. Mohit Sharma", mobile: "+91 99887 55677", email: "mohit.sharma@example.com" },
        { name: "Dr. Aarti Gupta", mobile: "+91 94567 77888", email: "aarti.gupta@example.com" },
        { name: "Dr. Rajesh Mehta", mobile: "+91 91234 66777", email: "rajesh.mehta@example.com" },
        { name: "Dr. Neelam Sharma", mobile: "+91 98765 22333", email: "neelam.sharma@example.com" }
    ]
};

function showDoctors() {
    const type = document.getElementById("doctor-type").value;
    const doctorList = document.getElementById("doctor-list");

    doctorList.innerHTML = '';

    if (type && doctors[type]) {
        doctors[type].forEach(doctor => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3><a href="#connect-page">${doctor.name}</a> - ${type.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}</h3>
                <div class="card-info">
                    <span>Mobile: ${doctor.mobile}</span>
                    <span>Email: ${doctor.email}</span>
                </div>
            `;
            doctorList.appendChild(card);
        });
    }
}
