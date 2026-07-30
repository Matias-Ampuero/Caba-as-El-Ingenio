const fs = require('fs');
const css = `
/* Ocultar marca de agua de Elfsight y el panel flotante */
a[href*="elfsight.com"] {
  display: none !important;
}
.eapps-widget-toolbar {
  display: none !important;
}
`;
fs.appendFileSync('src/styles/theme.css', css);
console.log("CSS appended.");
