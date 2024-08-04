import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b48f9",
        secondary: "#2ae3ff",
        navy: "#05254e",
      },
      boxShadow: {
        card: "0 0 1px 1px rgba(27, 72, 249, 0.2)",
        "card-hover": "0 0 15px 1px rgba(27, 72, 249, 0.5)",
      },
    },
  },
  plugins: [],
});
