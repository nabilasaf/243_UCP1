const express = require('express');
const app = express();
const db = require('./models');
const PORT = 3000;
app.use(express.json());
app .use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server started on port 3000`);
});
db.sequelize.sync()
.then((result)=> {
    app.listen(3000, ()=> {
        console.log('Server started');
    })
})
.catch((err) => {
    console.log(err);
});

app.get('/film',async (req, res) => {
    try {
        const film = await db.Hollywood.findAll();
        res.send(film);
    } catch (err) {
        res.send(err);
    }
  });

  app.put('/film/:id', async (req, res) => {
    const filmId = req.params.id;
    const data = req.body;
    try {
        const film = await db.Hollywood.findByPk(komikId);
        if (!film) {
            return res.status(404).send({ message: 'Film tidak ditemukan' });
        }
        await film.update(data);
        res.send({message: 'Film berhasil diupdate', komik});
    } catch (err) {
        res.status(500).send(err);
    }
  });