module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Home",
      },
      {
        source: "/register",
        destination: "/auth/Register",
      },
      {
        source: "/collection",
        destination: "/CollectionUser",
      },
      {
        source: "/infopaket",
        destination: "/Home/DetailPaket",
      },
    ];
  },
};
