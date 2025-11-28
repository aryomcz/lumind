export default function Breathing() {
    return (
        <div className="px-6 py-10 text-center max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-[var(--primary)] mb-6">
                Breathing Exercise
            </h1>

            <div className="w-48 h-48 mx-auto rounded-full bg-[var(--primary)]/30 animate-breath"></div>

            <p className="mt-6 text-gray-600">
                Follow the expanding circle to inhale and exhale slowly.
            </p>
        </div>
    );
}
