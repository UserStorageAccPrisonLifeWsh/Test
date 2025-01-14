// api/image.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Holen der URL aus dem Body der Anfrage
        const { url } = req.body;
        console.log('Empfangene URL:', url);

        // Hier kannst du weitere Logik hinzufügen, um mit der URL zu arbeiten

        // Antwort zurückgeben
        res.status(200).json({
            message: 'URL empfangen und verarbeitet',
            receivedUrl: url
        });
    } else {
        // Fehlerantwort für andere Methoden
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
