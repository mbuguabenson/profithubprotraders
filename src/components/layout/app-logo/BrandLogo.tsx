// ⚠️ PLACEHOLDER LOGO - REPLACE WITH YOUR BRAND ⚠️
// This is a generic template placeholder
// Replace this SVG with your own brand logo
// See: src/components/layout/app-logo/README.md for instructions

type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({
    width = 120,
    height = 32,
    fill = 'currentColor',
    className = ''
}: TBrandLogoProps) => {
    // Simple vector logo: yellow circle monogram + black brand wordmark
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 160 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Profithubpro logo"
        >
            {/* Circle monogram */}
            <g transform="translate(0,0)">
                <circle cx="16" cy="16" r="14" fill="#FFC700" />
                <path d="M10 21 L18 11 L22 14 L14 24 Z" fill="#000000" opacity="0.95" />
            </g>

            {/* Wordmark */}
            <text
                x="40"
                y="20"
                fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#000000"
                letterSpacing="0.2"
            >
                Profithubpro
            </text>

            {/* Silver underline accent */}
            <rect x="40" y="24" width="88" height="2" rx="1" fill="#C0C0C0" />
        </svg>
    );
};

// CUSTOMIZATION OPTIONS:
//
// Option 1: Replace SVG inline (Recommended for vector logos)
// --------------------------------------------------------
// Delete the placeholder SVG above and paste your logo's SVG code:
//
// export const BrandLogo = ({ width = 120, height = 32, fill = 'currentColor' }) => {
//     return (
//         <svg width={width} height={height} viewBox="0 0 120 32" fill="none">
//             {/* Your logo's SVG paths here */}
//             <path d="M..." fill={fill} />
//             <path d="M..." fill={fill} />
//         </svg>
//     );
// };
//
//
// Option 2: Use image file (For PNG/JPG logos)
// ---------------------------------------------
// 1. Place your logo in: public/logo.svg (or .png)
// 2. Replace this component with:
//
// export const BrandLogo = ({ width = 120, height = 32, className = '' }: TBrandLogoProps) => {
//     return (
//         <img
//             src="/logo.svg"
//             alt="Brand Logo"
//             width={width}
//             height={height}
//             className={className}
//         />
//     );
// };
//
//
// Option 3: Use external URL
// ---------------------------
// export const BrandLogo = ({ width = 120, height = 32 }: TBrandLogoProps) => {
//     return (
//         <img
//             src="https://yourdomain.com/logo.svg"
//             alt="Brand Logo"
//             width={width}
//             height={height}
//         />
//     );
// };
//
// For detailed instructions, see: src/components/layout/app-logo/README.md
