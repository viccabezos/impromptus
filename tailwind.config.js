module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f87171",
          secondary: "#fbbf24",
          accent: "#06b6d4",
          neutral: "#191D24",
          "base-100": "#f5f5f4",
          info: "#3ABFF8",
          success: "#4ade80",
          warning: "#fde047",
          error: "#dc2626",
        },
      },
      "dark",
      "light",
    ],

    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
