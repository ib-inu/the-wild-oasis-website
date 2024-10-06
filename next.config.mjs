/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "khoducccnjaydpfanqpa.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/cabin-images/**"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",  // Allow all paths for Google CDN images
            },
        ]
    },
    // output: "export"
};

export default nextConfig;

