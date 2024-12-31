import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 text-gray-800 font-sans">
            <div className="max-w-3xl mx-auto mt-12 p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Hello!</h1>
                <p className="text-lg leading-relaxed mb-4">
                    This application resembles a (drastically) simplified version of our
                    discount portals. For the sake of simplicity this is a singleNextJS
                    app instead of multiple as we have it in the actual setup.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    If you navigate to{" "}
                    <Link href="/site-a/dummy-shop" target="_blank" className="text-[color:hsl(215.3,19.3%,34.5%)] hover:underline">
                        /site-a/dummy-shop
                    </Link>
                    , you can see a dummy shop page with a list of discounts.
                </p>
                <p className="text-lg leading-relaxed">
                    The goal for this session is to setup a similar shop page for{" "}
                    <code className="px-1 py-0.5 bg-gray-100 rounded text-gray-800">
                        site-b
                    </code>
                    . In this process we want to focus on making the functionality
                    reusable so that basic functionality (data fetching and checkouts) is
                    the same for{" "}
                    <code className="px-1 py-0.5 bg-gray-100 rounded text-gray-800">
                        site-a
                    </code>
                    ,{" "}
                    <code className="px-1 py-0.5 bg-gray-100 rounded text-gray-800">
                        site-b
                    </code>
                    , and a potential future{" "}
                    <code className="px-1 py-0.5 bg-gray-100 rounded text-gray-800">
                        site-c
                    </code>
                    . While still allowing for needed customizibility (different discount
                    sorting methods or checkout paths).
                </p>
            </div>
        </main>
    );
}
