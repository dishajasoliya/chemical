/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // For React or other JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// export default {

//   theme:{
//     screens:{
//       'sm': {'min':'640px', 'max':'767px'},
//       'md': {'min':'768px', 'max':'1023px'},
//       'lg': {'min':'1024px', 'max':'1279px'},
//       'xl': {'min':'1280px', 'max':'1535px'},
//       '2xl': {'min':'1536px'},
//       },
//     }
//   }
