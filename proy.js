let estudiantes = [
    {nombre: "Amaya",
    nota1: 7,
    nota2: 5
    },
    {nombre: "Canizzo",
    nota1: 8,
    nota2: 7
    },
    {nombre: "Chales",
    nota1: 10,
    nota2: 10
    },
    {nombre: "Jofré",
    nota1: 7,
    nota2: 6
    },
    {nombre: "Lucero",
    nota1: 8,
    nota2: 2
    },
    {nombre: "García",
    nota1: 3,
    nota2: 8
    },
    {nombre: "Martín",
    nota1: 1,
    nota2: 2
    },
    {nombre: "Más",
    nota1: 5,
    nota2: 4
    },
    {nombre: "Molina",
    nota1: 7,
    nota2: 3
    },
    {nombre: "Pérez",
    nota1: 9,
    nota2: 8
    },
    {nombre: "Roco",
    nota1: 7,
    nota2: 3
    },
    {nombre: "Vidal",
    nota1: 8,
    nota2: 5
    }
];
const calcularPromedio = (nota1, nota2) => (nota1 + nota2) / 2;
function mostrarEstadoEstudiantes() {
  console.log("Estado de los estudiantes:\n");
  for (let estudiante of estudiantes) {
    let promedio = calcularPromedio(estudiante.nota1, estudiante.nota2);
    if (promedio >= 6) {
      console.log(`${estudiante.nombre} | Promedio: ${promedio.toFixed(2)} | Aprobado`);
    } else {
      console.log(`${estudiante.nombre} | Promedio: ${promedio.toFixed(2)} | Desaprobado`);
    }
  }
}
mostrarEstadoEstudiantes();