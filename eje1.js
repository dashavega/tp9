const album = {
    title: "Album de Ejemplo",
    artist: "Artista Ejemplo",
    year: 2023,
    genre: "Pop",
    
    // Método get
    get info() {
        return `Título: ${this.title}, Artista: ${this.artist}, Año: ${this.year}, Género: ${this.genre}`;
    },
    
    // Método set
    set updateAlbum(newData) {
        this.title = newData.title || this.title;
        this.artist = newData.artist || this.artist;
        this.year = newData.year || this.year;
        this.genre = newData.genre || this.genre;
    }
};

// Mostrar la información del álbum
console.log(album.info);

// Modificar los valores
album.updateAlbum = { title: "Nuevo Título", year: 2024 };

// Mostrar la información actualizada
console.log(album.info);
