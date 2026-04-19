export function goToLink(link: string) {
  if (link === "null" || "" || undefined) { }
  else {
    window.location.href = "https://" + link;
  }
};