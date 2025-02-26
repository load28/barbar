import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {};

module.exports = withVanillaExtract(nextConfig);
