import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Praksis 2026 – Thon Hotel Kristiansand",
    description: "IS302-praksisprosjekt ved Thon Hotel Kristiansand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="no">
            <body className={`${inter.className} antialiased`}>
                <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                    <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/thon-logo.webp"
                                alt="Thon Hotels"
                                width={42}
                                height={22}
                                className="object-contain"
                                priority
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="text-lg font-bold text-gray-900">Praksis</span>
                                <span className="text-xs font-semibold text-red-700">2026</span>
                            </div>
                        </Link>

                        <ul className="flex items-center gap-2 text-base font-medium list-none m-0 p-0">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition">
                                    Hjem
                                </Link>
                            </li>
                            <li>
                                <Link href="/studentene" className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition">
                                    Studentene
                                </Link>
                            </li>
                            <li>
                                <Link href="/prosjekt" className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition">
                                    Prosjektet
                                </Link>
                            </li>
                            <li>
                                <Link href="/bedrift" className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition">
                                    Bedriften
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className="page-shell py-10 sm:py-14">{children}</main>

                <footer className="mt-16 border-t border-gray-200 bg-white">
                    <div className="page-shell py-8 text-center text-sm text-gray-500">
                        <p className="font-semibold text-gray-900">© 2026 Praksisgruppen – Universitetet i Agder</p>
                        <p className="mt-2 text-xs">Praksis ved Thon Hotel Kristiansand</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
