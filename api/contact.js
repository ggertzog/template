export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name } = req.body;
        res.status(200).json({ message: `Thank you for your interest, ${name}` });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
