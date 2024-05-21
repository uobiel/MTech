class Toast {
    messages = document.querySelector('.messages');
    texts = {
        emDesenvolvimento: 'Funcionalidade em desenvolvimento'
    };

    types = {
        error: 'error',
        sucess: 'sucess',
        alert: 'alert'
    }

    createToast(type, text) {
        let newToast = document.createElement('div');
        newToast.innerHTML += `
            <div class="toast toast-${type}">
                <div class="icon icon-${type}">
    
                </div>
                <div class="content">
                    <p>${text}</p>
                </div>
            </div>
        `;
        this.messages.appendChild(newToast);
        newToast.timeOut = setTimeout(
            ()=>newToast.remove(), 3000
        )
    }
}

export default Toast;