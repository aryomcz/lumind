import articles from "@/data/articles";
import Link from "next/link";

export default function ArticleDetail({ params }) {
    const id = parseInt(params.id);
    const article = articles.find((a) => a.id === id);

    if (!article) {
        return (
            <div className="px-6 py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-700">Article not found.</h1>
                <Link
                    href="/articles"
                    className="text-[var(--primary)] underline mt-4 inline-block"
                >
                    Back to Articles
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <Link
                href="/articles"
                className="text-[var(--primary)] underline inline-block mb-6"
            >
                ← Back to Articles
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {article.title}
            </h1>
            <p className="text-gray-500 mt-2 text-sm">Published • {article.date}</p>

            <div className="mt-6 h-64 w-full rounded-xl overflow-hidden bg-gray-200 shadow">
                {article.thumbnail ? (
                    <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            <article className="prose prose-indigo mt-8 max-w-none text-gray-700 whitespace-pre-line">
                {article.content}
            </article>

            <div className="h-[1px] bg-gray-300 my-12"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Related Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {articles
                    .filter((a) => a.id !== id)
                    .slice(0, 2)
                    .map((a) => (
                        <Link
                            key={a.id}
                            href={`/articles/${a.id}`}
                            className="block bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="font-semibold text-gray-800 line-clamp-2">
                                {a.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                                {a.preview}
                            </p>
                            <span className="text-[var(--primary)] mt-2 inline-block font-medium">
                                Read More →
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
