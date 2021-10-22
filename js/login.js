document.getElementById("login_form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const storage = JSON.parse(localStorage.user)
    if(email!==storage.email){
        alert("No User With that email address")
    }
    if(password!==storage.password){
        alert("Password do not match")
    }
    if(email===storage.email && password===storage.password) {
        localStorage.setItem("loggegIn", "true")
        alert(`Welcome ${email} your password is ${password}`)
        window.location.href="http://127.0.0.1:5500/new.html"
    }
})