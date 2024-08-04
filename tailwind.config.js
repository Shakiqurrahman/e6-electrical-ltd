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
      
    },
  },
  plugins: [],
});
