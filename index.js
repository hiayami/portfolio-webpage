setInterval(() => {
    const date = new Date()
    
    document.querySelector('#time').innerText = date.toLocaleString('en-US', {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit"
    })
}, 1000) 