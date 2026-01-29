document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the parent container
    const container = document.querySelector('.head-container');
    const removebutton = document.getElementById('remove-cross');

    // 2. Add a single event listener (Event Delegation)
    removebutton.addEventListener('click', () => {
        container.remove();
        console.log("yes");
    });
});
