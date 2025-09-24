export async function onRequest(context) {
  const newUrl = "https://turkgdpsdl.pages.dev"; // Buraya Pages URL'ini yaz
  return Response.redirect(newUrl, 301); // 301 = kalıcı yönlendirme
}
