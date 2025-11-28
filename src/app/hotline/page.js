export default function HotlinePage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[var(--primary)]">Need Help?</h1>
                <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                    You are not alone. These resources can support you during difficult
                    times.
                </p>
            </div>

            {/* Emergency */}
            <section className="bg-white p-6 rounded-xl shadow mb-8 card-hover">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> Emergency Hotlines
                </h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>SEJIWA Hotline</strong>: 119 ext 8
                    </li>
                    <li>
                        <strong>National Suicide Hotline</strong>: 157
                    </li>
                    <li>
                        <strong>Emergency Services</strong>: 112
                    </li>
                </ul>
            </section>

            {/* Campus */}
            <section className="bg-white p-6 rounded-xl shadow mb-8 card-hover">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span> Campus Counseling Support
                </h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>Campus Counselor</strong>: 08xx-xxxx-xxxx
                    </li>
                    <li>
                        <strong>Psychology Lab Appointment</strong>:
                        appointment@campus.ac.id
                    </li>
                    <li>
                        <strong>Student Affairs Office</strong>: Mon–Fri, 09:00–15:00
                    </li>
                </ul>
            </section>

            {/* Professional */}
            <section className="bg-white p-6 rounded-xl shadow mb-8 card-hover">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💬</span> Professional Mental Health Services
                </h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>Halo Kemenkes</strong>: 1500-567
                    </li>
                    <li>
                        <strong>Psychology Consultation Center</strong>: 1500-xxx
                    </li>
                    <li>
                        <strong>WhatsApp Counseling</strong>: +62 811-xxxx-xxx
                    </li>
                </ul>
            </section>

            {/* Tips */}
            <section className="bg-white p-6 rounded-xl shadow mb-14 card-hover">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌿</span> Self Help Tips
                </h2>
                <ul className="space-y-3 text-gray-700">
                    <li>• Practice 5–10 minutes of deep breathing</li>
                    <li>• Talk to someone you trust</li>
                    <li>• Write your thoughts in a journal</li>
                    <li>• Avoid isolating yourself—stay connected</li>
                    <li>• Reduce screen time before bed</li>
                </ul>
            </section>

            <p className="text-gray-600 text-center text-sm">
                If you feel overwhelmed, reach out immediately. Help is always available.
            </p>
        </div>
    );
}
