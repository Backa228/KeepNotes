import daisyui from "daisyui";
//tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
            primarygray: "#757575",
            bgblue: "#F0F4FA",
            text: "#202124",
            accent: '#FDF0C3',
                pinkNote: '#FAAFA8',
                orangeNote: '#F39F76',
                yellowNote: '#FFF8B8',
                greenNote: '#E2F6D3',
                darkgreenNote: '#B4DDD3',
                lightblueNote: '#D4E3ED',
                purpleNote: '#D3BFDB',
                lightpinkNote: '#F6E2DD',
                beigeNote: '#E9E3D5',
                grayNote: '#EFEFF1',
         }
    },
  },
  plugins: [daisyui],
};