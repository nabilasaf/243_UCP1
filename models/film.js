module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("film", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Nama_Film: {
            type: DataTypes.STRING,
        },
        Deskripsi:{
            type: DataTypes.STRING,
        },
        Sutradara:{
            type: DataTypes.STRING,
        },
        Tahun_Terbit:{
            type: DataTypes.STRING,
        },
        Genre:{
            type: DataTypes.STRING,
        }
    });
    return film;
};