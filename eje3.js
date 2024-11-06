const persona = {
    nombre: "Juan Pérez",
    edad: 30,
    
    // Método get
    get info() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    },
    
    // Método set para actualizar la edad
    set actualizarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
};

// Mostrar la información de la persona
console.log(persona.info);

// Actualizar la edad
persona.actualizarEdad = 35;

// Mostrar la información actualizada
console.log(persona.info);
