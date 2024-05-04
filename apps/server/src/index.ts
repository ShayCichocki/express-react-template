import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Add your routes under here
app.get('/status', async (req, res) => {
   res.json({status: "up"})
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})