import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'V.I.B.E. App',
	description: 'Nejlepší appka v TDA',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='en' className={`${inter.variable} h-full antialiased`}>
			<body className='flex flex-col min-h-full'>{children}</body>
		</html>
	);
}
