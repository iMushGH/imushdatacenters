import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  
};



const path = require('path')
module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
}

module.exports = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

export default nextConfig;


