# Brave — HTML/CSS/JS Clone

Aceasta este o clonă simplificată a interfeței browserului Brave, realizată doar în HTML, CSS și JavaScript. Scopul este să redea elementele UI principale: bara de adrese, taburi, pagină "New Tab", și un panou "Shields" minimal.

Fișiere:
- `index.html` — punctul de intrare.
- `css/styles.css` — stiluri.
- `js/app.js` — comportament simplificat (navigare într-un iframe, taburi vizuale, toggle Shields).

Cum rulezi:
1. Deschide `index.html` în browser (dublu-click sau File -> Open). Nu e necesar un server pentru funcționalitățile de bază, dar anumite pagini externe se vor încărca corect dacă browserul permite iframes pentru domeniul respectiv.

Limitări și note:
- Nu este un browser real — doar o interfață demonstrativă.
- Navigarea folosește un `iframe`. Unele site-uri refuză să fie încărcate într-un iframe (X-Frame-Options), caz în care ele se vor deschide într-o filă nouă.
- Scopul e vizual și pentru prototipare — poți extinde funcționalitățile (bookmarkuri, session restore, blocare reală a conținutului, etc.).

Dacă vrei, pot adăuga:
- un sistem de teme (dark/light),
- un manager de taburi cu reordonare,
- integrare cu DuckDuckGo direct din bara de adresă,
- sau să transform proiectul într-o aplicație Electron.
