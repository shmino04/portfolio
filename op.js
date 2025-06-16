document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navPanel = document.querySelector(".nav-panel");
    const navbarButtons = document.querySelectorAll(".navbarbut2");

    hamburger.addEventListener("click", function() {
        navPanel.classList.toggle("show");
    });

    navbarButtons.forEach(button => {
        button.addEventListener("click", function() {
            navPanel.classList.remove("show"); 
            
            const targetId = button.getAttribute("href"); 
            if (targetId) {
                window.location.href = targetId; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarButtons = document.querySelectorAll(".navbarbut");

    navbarButtons.forEach(button => {
        button.addEventListener("click", function() {
            
            navbarButtons.forEach(btn => btn.classList.remove("active"));
            
            
            button.classList.add("active");

            
            setTimeout(() => {
                button.classList.remove("active"); 
            }, 1000); 
        });
    });
});





document.querySelectorAll(".but").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".but").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});

function showInfo(id) {

    document.querySelectorAll('.info').forEach(div => {
        div.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function hideInfo() {

    document.querySelectorAll('.info').forEach(div => {
        div.style.display = "none";
    });
}


document.querySelectorAll(".img-pro").forEach(img => {
    img.addEventListener("click", () => {
        
        document.querySelectorAll(".img-pro").forEach(i => i.classList.remove("selected"));

        
        img.classList.add("selected");

        
        setTimeout(() => {
            img.classList.remove("selected");
        }, 2000);
    });
});

document.querySelector("#pro1").addEventListener("click", () => {
    window.open("MA5_Estravo/card.html", "_blank"); 
});

document.querySelector("#pro2").addEventListener("click", () => {
    window.open("FA1_Estravo/mainpage.html", "_blank"); 
});

document.querySelector("#pro3").addEventListener("click", () => {
    window.open("FA2_Estravo/home.html", "_blank"); 
});

function showPanel() {
    document.getElementById("image-panel").style.display = "flex"; 
}

function hidePanel() {
    document.getElementById("image-panel").style.display = "none"; 
}


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img-ide");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, { threshold: 0.3 });

    images.forEach(img => observer.observe(img));
});


document.querySelectorAll(".butt").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".butt").forEach(btn => btn.classList.remove("pick"));
        button.classList.add("pick");
    });
});









