/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import './src/styles/variables.scss'; @import './src/styles/mixins.scss';`,  // Injecte les variables et mixins globales

    // Next.js va automatiquement utiliser la dernière version de Sass installée
    includePaths: ['./src/styles'], // (Optionnel) Permet de définir des chemins globaux pour tes fichiers Sass
  },
};

export default nextConfig;
