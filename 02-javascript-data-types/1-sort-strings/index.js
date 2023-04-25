/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  if (param === "asc" || param === "desc") {
    const direction = param === "asc" ? -1 : 1;
    const sorted = [...arr].sort(
      (a, b) =>
        direction *
        b.localeCompare(a, "ru-en", {
          sensitivity: "variant",
          caseFirst: "upper",
        })
    );
    return sorted;
  } else {
    console.log("Wrong param");
  }
}
