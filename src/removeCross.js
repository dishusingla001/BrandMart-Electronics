export const removeCross = () => {
  const container = document.querySelector('.head-container');
    const removebutton = document.getElementById('remove-cross');

    // 2. Add a single event listener (Event Delegation)
    removebutton.addEventListener('click', () => {
        container.remove();
        console.log("yes");
    });
}
