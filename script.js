document.getElementById("licenseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let carNumber = document.getElementById("carNumber").value;
    let customerName = document.getElementById("customerName").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    if (carNumber && customerName && expiryDate && phoneNumber) {
        let table = document.getElementById("recordsTable");
        let newRow = table.insertRow();
        newRow.innerHTML = `<td>${carNumber}</td><td>${customerName}</td><td>${expiryDate}</td><td>${phoneNumber}</td>`;
        
        document.getElementById("licenseForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

            document.addEventListener("DOMContentLoaded", function () {
        showSection("home"); // Show Home section by default

        let navLinks = document.querySelectorAll("nav ul li a");

        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Stop default link behavior
                let sectionId = this.getAttribute("data-section"); // Get target section ID

                showSection(sectionId); // Show the clicked section

                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove("active"));
                this.classList.add("active"); // Highlight clicked link
            });
        });
    });

                    document.addEventListener("DOMContentLoaded", function () {
            let navLinks = document.querySelectorAll("nav ul li a");

            navLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Stop default link behavior
                    let sectionId = this.getAttribute("data-section"); // Get target section ID

                    let targetSection = document.getElementById(sectionId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            });
        });