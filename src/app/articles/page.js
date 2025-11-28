import articles from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlesPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
                Articles & Tips
            </h1>
            <p className="text-gray-600 mb-10 max-w-2xl">
                Explore guides, tips, and helpful insights to improve your mental well-being.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                ))}
            </div>
        </div>
    );
}
