// Get the form element
const form = document.querySelector('form');

// Listen for form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission/redirect

    // Get form data
    const formData = new FormData(form);

    // `try` means: **"Attempt this code, but if ANYTHING goes wrong, don't crash - jump to the catch block instead."**
    try {
        // this still Submit to Formspree using fetch
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Show success toast
            showToast('Success! Your submission is complete.');
            // Reset the form
            form.reset();
        } else {
            // Show error toast
            showToast('Oops! There was a problem. Please try again.');
        }
    } catch (error) {
        // Show error toast
        showToast('Oops! There was a problem. Please try again.');
    }
});
// Toast function
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Shows the toast - small delay allows CSS transition to work
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Hide and remove toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 500); // Wait for fade-out transition to complete
    }, 5000);
}