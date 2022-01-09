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
        destination: "/Auth/Register",
      },
      {
        source: "/login",
        destination: "/Auth/Login",
      },

      {
        source: "/infopaket",
        destination: "/Home/DetailPaket",
      },
    ];
  },
};
