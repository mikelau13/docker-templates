require('dotenv').config();
const fs = require('fs');
const path = require('path');
const withTypescript = require('@zeit/next-typescript');

const nextConfig = withTypescript({
  webpack(config, options) {
    return config
  },
  NODE_ENV: process.env.NODE_ENV,
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT
})

module.exports = nextConfig;
