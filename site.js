"use strict";
// Native <details> keeps the FAQ usable even when JavaScript is disabled.
// Keep only one answer expanded; this page does not send requests or store data.
document.querySelectorAll(".faq-list details").forEach(function (item) {
  item.addEventListener("toggle", function () {
    if (!item.open) return;
    document.querySelectorAll(".faq-list details").forEach(function (other) {
      if (other !== item) other.open = false;
    });
  });
});
