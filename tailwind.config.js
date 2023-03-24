/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}", "./index.html"],
  theme: {
    extend: {
      borderWidth: {
        fontSize: {
          0.6: "0.6rem",
        },
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        18: "18px",
      },
      colors: {
        rgba: "transparent rgba(251, 146, 60,.9)",
      },
      padding: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
