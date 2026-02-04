const express = require('express');
const app = express();
const port = 3000;

const quotes = [
  "Un bon développeur est celui qui regarde des deux côtés avant de traverser une rue à sens unique.",
  "Le code, c'est comme l'humour. Si vous devez l'expliquer, c'est qu'il est mauvais.",
  "Il y a deux façons d'écrire du code sans erreur. Seule la troisième fonctionne.",
  "Docker a résolu le 'ça marche sur ma machine', maintenant on a le 'ça marche pas dans mon conteneur'.",
  "Un bug n'est jamais qu'une fonctionnalité qui demande trop d'attention."
];

app.get('/', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Petit HTML sympa directement dans le code
  res.send(`
    <html>
      <head>
        <title>Sagesse de Dev</title>
        <style>
          body { background: #1a1a1a; color: #00ff00; font-family: 'Courier New', monospace; display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; }
          .card { border: 2px solid #00ff00; padding: 40px; border-radius: 15px; box-shadow: 0 0 20px #00ff00; max-width: 600px; }
          button { background: #00ff00; color: #1a1a1a; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; margin-top: 20px; border-radius: 5px; }
          button:hover { background: #00cc00; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>$ [SAGESSE_BOT]</h1>
          <p style="font-size: 1.5em;">"${randomQuote}"</p>
          <button onclick="location.reload()">Nouvelle dose de vérité</button>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Serveur prêt sur http://localhost:${port}`);
});