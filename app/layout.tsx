import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Praksis 2026 – Thon Hotel Kristiansand",
    description: "Praksisprosjekt for inventory‑app ved Thon Hotel Kristiansand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="no">
            <body className="bg-gray-50 text-gray-900 antialiased">
                <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                    <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3 no-underline">
                            <Image
                                src="/thon-logo.png"
                                alt="Thon Logo"
                                width={44}
                                height={44}
                                className="rounded-md object-contain hover:shadow-md transition"
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="text-lg font-bold text-gray-900">Praksis</span>
                                <span className="text-xs font-semibold text-red-700">2026</span>
                            </div>
                        </Link>

                        <ul className="flex items-center gap-2 text-base font-medium list-none m-0 p-0">
                            <li>
                                <Link 
                                    href="/" 
                                    className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition no-underline"
                                >
                                    Hjem
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/studentene" 
                                    className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition no-underline"
                                >
                                    Studentene
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/prosjekt" 
                                    className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition no-underline"
                                >
                                    Prosjektet
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/bedrift" 
                                    className="text-gray-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition no-underline"
                                >
                                    Bedriften
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-16">
                    {children}
                </main>

                <footer className="bg-white border-t border-gray-200 py-10 text-center text-gray-600 text-sm">
                    <div className="max-w-7xl mx-auto px-8 space-y-4">
                        <p className="font-semibold text-gray-900">© 2026 Praksisgruppen – Universitetet i Agder</p>
                        <p className="text-xs text-gray-500">Praksis ved Thon Hotel Kristiansand | Våren 2026</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
