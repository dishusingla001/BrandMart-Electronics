export const showToast = (operation) => {
  const toast = document.createElement('div');
  toast.classList.add('toast'); 

  if (operation === 'add') {
    toast.textContent = 'Product has been added successfully';
  } else {
    toast.textContent = 'Product has been deleted successfully';
  }

  console.log(operation);

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
};