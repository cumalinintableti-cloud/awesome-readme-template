export default {
  async fetch(request) {
    // Yeni Cloudflare Pages adresini buraya yaz
    const newUrl = "https://turkgdpsdl.pages.dev";

    // 301 = kalıcı yönlendirme
    return Response.redirect(newUrl, 301);
  }
};
