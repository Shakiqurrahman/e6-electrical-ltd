import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#60ccc2',
        secondary: '#0f776d',
        yellow: '#ffda1e',
      },
    },
  },
  plugins: [],
});

