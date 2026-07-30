const fs = require('fs');
let css = fs.readFileSync('src/styles/theme.css', 'utf8');

// Replace the previous rule with a much stronger set of rules
css = css.replace(/a\[href\*="elfsight\.com"\] \{[\s\S]*?\}/g, '');
css = css.replace(/\.eapps-widget-toolbar \{[\s\S]*?\}/g, '');

const newRules = `
/* Ocultar marca de agua de Elfsight (múltiples métodos) */
[class*="eapps-link"],
[class*="Badge__Container"],
[class*="Watermark__Container"],
a[href*="elfsight"],
.eapps-widget-toolbar {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

/* Ocultar el título de Elfsight (What Our Customers Say) */
[class*="WidgetTitle__Container"],
[class*="Header__Container"],
.eapps-google-reviews-title-container {
  display: none !important;
}
`;

fs.writeFileSync('src/styles/theme.css', css + newRules);
console.log("Updated CSS");
