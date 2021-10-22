
document.getElementById("signup_form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const full_name = document.getElementById("full_name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const user = {
        email: email,
        full_name: full_name,
        password: password
    }
    localStorage.setItem("user", JSON.stringify(user))
    window.location.href="http://127.0.0.1:5500/login3.html"
})