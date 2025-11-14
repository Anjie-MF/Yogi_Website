
//write toast first.....
document.getElementById('showToastBtn').addEventListener('click', () => {
    showToast('Success! Your submission is complete.')
});

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);

    //shows the toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10); //this line cuases a small delay for transtion to work? ask claude what that means

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 500);//this linewaits for the fade-out transtion to complete
    }, 5000); //this line make the toast visible for 5 seconds
}


//...... then use that for preventDefault form submission

const sumbit = document.querySelector(".submit");
sumbit.addEventListener("click", SubmitEvent); //didnt know about submit event..thats cool

function SubmitEvent(event) {
    event.preventDefault()
    
}








// const checkbox = document.querySelector("#id-checkbox");

// checkbox.addEventListener("click", checkboxClick);

// function checkboxClick(event) {
//   const warn = "preventDefault() won't let you check this!\n";
//   document.getElementById("output-box").innerText += warn;
//   event.preventDefault();
// }

// User clicks submit
// Your event listener catches it with preventDefault()
// You send the form data to Formspree using fetch() or AJAX
// You get the response back
// You show your custom modal ✅ (you stay in control)