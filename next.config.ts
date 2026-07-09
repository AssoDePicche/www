import type { NextConfig } from "next";

const inProduction = process.env.NODE_ENV.toLocaleLowerCase() === 'production';


const nextConfig: NextConfig = {
    assetPrefix: inProduction ? '/www' : '',
    basePath: inProduction ? '/www' : '',
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
};

export default nextConfig;
