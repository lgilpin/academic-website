document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#grouped-publications");
  if (!container) return;

  const search = document.querySelector(".publication-filter-search");
  const type = document.querySelector(".publication-filter-type");
  const year = document.querySelector(".publication-filter-year");
  const noResults = document.querySelector(".publication-no-results");

  function applyPublicationFilters() {
    const query = search.value.trim().toLocaleLowerCase();
    const selectedType = type.value;
    const selectedYear = year.value;
    let visibleCount = 0;

    container.querySelectorAll(".publication-year-group").forEach(function (group) {
      let groupCount = 0;
      group.querySelectorAll(".publication-entry").forEach(function (entry) {
        const matchesSearch = !query || entry.textContent.toLocaleLowerCase().includes(query);
        const matchesType = selectedType === "*" || entry.dataset.type === selectedType;
        const matchesYear = selectedYear === "*" || group.dataset.year === selectedYear;
        const visible = matchesSearch && matchesType && matchesYear;
        entry.hidden = !visible;
        if (visible) {
          groupCount += 1;
          visibleCount += 1;
        }
      });
      group.hidden = groupCount === 0;
    });

    noResults.hidden = visibleCount !== 0;
  }

  search.addEventListener("input", applyPublicationFilters);
  type.addEventListener("change", function () {
    const nextHash = type.value === "*" ? "" : "#" + type.value;
    history.replaceState(null, "", window.location.pathname + window.location.search + nextHash);
    applyPublicationFilters();
  });
  year.addEventListener("change", applyPublicationFilters);

  const initialType = window.location.hash.slice(1);
  if (initialType && type.querySelector('option[value="' + initialType + '"]')) {
    type.value = initialType;
  }
  applyPublicationFilters();
});
