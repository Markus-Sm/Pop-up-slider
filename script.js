// Pobierz referencję do przycisku "OK"
const cookieBtn = document.getElementById('cookie-btn');

// Funkcja, która zapisuje informację o akceptacji plików cookies
function setCookie() {
  document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Funkcja, która sprawdza, czy plik cookie istnieje
function checkCookie() {
  if (document.cookie.indexOf("cookieConsent=true") == -1) {
    // Pokaż informację o plikach cookies, jeśli plik cookie nie istnieje
    document.getElementById('cookie-info').style.display = 'block';
  }
}

// Obsługa zdarzenia kliknięcia na przycisk "OK"
cookieBtn.addEventListener('click', function() {
  // Ukryj informację o plikach cookies
  document.getElementById('cookie-info').style.display = 'none';
  // Zapisz informację o akceptacji plików cookies
  setCookie();
});

// Wywołaj funkcję checkCookie po załadowaniu strony
window.onload = checkCookie;
