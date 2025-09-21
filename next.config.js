/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto es crucial para generar un sitio estático
  distDir: 'out', // Opcional, pero es una buena práctica para saber dónde se exporta
};

module.exports = nextConfig;