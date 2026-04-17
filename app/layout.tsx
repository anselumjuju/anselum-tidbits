import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const blackOpsOne = localFont({
  src: './assets/fonts/BlackOpsOne.ttf',
  variable: '--font-black-ops-one',
});

const gluten = localFont({
  src: './assets/fonts/Gluten.ttf',
  variable: '--font-gluten',
});

const inter = localFont({
  src: './assets/fonts/inter.ttf',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Anselum TidBits',
  description: 'Personal Blog app about Tech, Programming, Web Development, and more.',
  keywords: ['Nextjs', 'anselum-tidbits', 'anselum', 'tidbits', 'blog', 'typescript', 'tailwind', 'material-ui', 'sanity'],
  openGraph: {
    url: 'https://anselum-tidbits.vercel.app/',
    type: 'website',
    title: 'Anselum TidBits',
    description: 'Personal Blog app about Tech, Programming, Web Development, and more.',
    images: ['https://anselum-tidbits.vercel.app/blogBanner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://anselum-tidbits.vercel.app/',
    title: 'Anselum TidBits',
    description: 'Personal Blog app about Tech, Programming, Web Development, and more.',
    images: ['https://anselum-tidbits.vercel.app/blogBanner.png'],
  },
};

export default function RootLayout(props: LayoutProps<'/'>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${blackOpsOne.variable} ${gluten.variable} antialiased max-w-screen-2xl mx-auto`}>{props.children}</body>
    </html>
  );
}
