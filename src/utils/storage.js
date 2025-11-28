// Save a mood entry into localStorage
export function saveMood(mood) {
    const history = JSON.parse(localStorage.getItem("moods") || "[]");

    history.push({
        mood: mood.label,
        date: new Date().toISOString()
    });

    localStorage.setItem("moods", JSON.stringify(history));
}


// Retrieve all mood logs
export function getMoodHistory() {
    return JSON.parse(localStorage.getItem("moods") || "[]");
}


// Clear logs (optional - useful for testing)
export function clearMoodHistory() {
    localStorage.removeItem("moods");
}
