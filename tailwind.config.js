import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#37B7C3',
        secondary: '#088395',
        navy: '#071952',
      },
    },
  },
  plugins: [],
});