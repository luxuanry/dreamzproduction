/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // 这一行必须正确，以确保 Tailwind 扫描到 src 目录下的所有 JSX 文件
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}