document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("newsletterForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => {
            if (response.ok) {
                
                console.log("Cheguei")
                showSuccessMessage();
            } else {
                throw new Error("Erro ao enviar o formulário");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    });

    function showSuccessMessage() {
      
        const toast = document.createElement("div");
        toast.classList.add("toast");
    
        
        const toastMessage = document.createElement("p");
        toastMessage.textContent = "Inscrito com sucesso!";
        toast.appendChild(toastMessage);

        document.body.appendChild(toast);
    
        toast.style.display = "block";
    
        setTimeout(function() {
            toast.remove();
        }, 3000);
    }
})