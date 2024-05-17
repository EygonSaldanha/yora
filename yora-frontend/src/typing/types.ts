export function formatarData(date: Date) {
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");

  return dia + "/" + mes + "/" + date.getFullYear();
}
