'use strict';

// --- SELEZIONO ELEMENTI ---
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
// --- FUNZIONE CHIUSURA MODALE ---
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// --- FUNZIONE APERTURA MODALE ---
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// --- EVENT LISTENER SU TUTTI I BUTTONS CON CLASSE SHOW-MODAL ---
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// --- SELEZIONO IL BUTTON DI CHIUSURA ---
btnCloseModal.addEventListener('click', closeModal);

// --- SELEZIONO OVERLAY ---
overlay.addEventListener('click', closeModal);

// --- KEYBOARD ESC ---
document.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
