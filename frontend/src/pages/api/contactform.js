import axios from 'axios';

export default function handler(req, res) {
    if (req.method === 'POST') {
        if (!req.body?.name || !req.body?.discord || !req.body?.message) {
            return res.status(400).send({ error: "Invalid request payload" });
        }

        if (req.body?.discord?.indexOf('#') === -1 && !/^\d+$/g.test(req.body?.discord)) {
            return res.status(400).send({ error: "Invalid discord id or tag in request payload" });
        }

        if (req.body?.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig.test(req.body?.email)) {
            return res.status(400).send({ error: "Invalid email in request payload" });
        }

        const url = `https://docs.google.com/forms/d/e/${process.env.GOOGLE_FORM_ID}/formResponse?submit=Submit&usp=pp_url&entry.47169004=${encodeURIComponent(req.body.name)}&entry.1619646346=${encodeURIComponent(req.body?.email ?? '')}&entry.1944379659=${encodeURIComponent(req.body.discord)}&entry.170436172=${encodeURIComponent(req.body.message)}`;
        
        axios.get(url).then(response => {
            console.log(response.body);
            res.send({ success: true });
        }).catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Internal Server Error' });
        });
    }
    else {
        res.status(405).json({ error: '405 Method not allowed' });
    }
}
