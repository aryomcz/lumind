export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--primary)] font-semibold">MindEase</span>.
          All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-gray-600">
          <a href="/articles" className="hover:text-[var(--primary)] transition">
            Articles
          </a>
          <a href="/hotline" className="hover:text-[var(--primary)] transition">
            Hotline
          </a>
          <a href="#" className="hover:text-[var(--primary)] transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
