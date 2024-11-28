document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Collect form data
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        console.log("Form Submitted:");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: ${message}`);

        alert(`Thank you, ${name}! We have received your message.`);
        event.target.reset();
    });
});
