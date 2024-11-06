const jugador = {
    nombre: "Lionel Messi",
    fechaNacimiento: "1987-06-24",
    
    // Método get
    get info() {
        return `Nombre: ${this.nombre}, Fecha de Nacimiento: ${this.fechaNacimiento}`;
    },
    
    // Método set para calcular la edad en 2027
    set calcularEdadEn2027() {
        const nacimiento = new Date(this.fechaNacimiento);
        const edadEn2027 = 2027 - nacimiento.getFullYear();
        console.log(`${this.nombre} tendrá ${edadEn2027} años en 2027.`);
    }
};

// Mostrar la información del jugador
console.log(jugador.info);

// Calcular y mostrar la edad en 2027
jugador.calcularEdadEn2027;
