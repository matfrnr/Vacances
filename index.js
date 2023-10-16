// Convertit la date du jour au format d'entrée
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// Calcul de la date de demain
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// convertir au format d'entrée
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  totalPerNight.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
bookingCalc();

// Sélectionnez le bouton par son ID
const reloadButton = document.getElementById('reloadPage');

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
reloadButton.addEventListener('click', () => {
  // Rechargez la page
  location.reload();
});