// Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

// 1. Usando filter para encontrar estudantes com idade >= 20
const olderStudents = students.filter((student) => student.age >= 20);
console.log("Estudantes com 20 anos ou mais:", olderStudents);

// 2. Usando find para encontrar o primeiro estudante com nota > 90
const studentWithHighGrade = students.find((student) => {
  return student.grades.some((grade) => grade > 90);
});
console.log(
  "\\nPrimeiro estudante com nota acima de 90:",
  studentWithHighGrade.name
);

// 3. Usando filter para encontrar estudantes ativos com média acima de 80
const highPerformingActiveStudents = students.filter((student) => {
  // Calculando a média das notas
  const average =
    student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;

  return student.active && average > 80;
});

console.log("\\nEstudantes ativos com média acima de 80:");
highPerformingActiveStudents.forEach((student) => console.log(student.name));

// Letra a do desafio: estudantes inativos

const inactiveStudents = students.filter(student => !student.active);
console.log("Os estudantes inativos são \n", inactiveStudents); 

// Letras b do desafio: encontrar o estudante com o id = 3

const studentId3 = students.find(student => student.id === 3);
console.log(
  "\nEstudante com o id 3 é:", studentId3.name);

// Letra c do desafio: estudantes que tiraram pelo mens uma nota abaixo de 70

const lowerThan70 = students.filter(student => student.grades.some(grade => grade < 70));

console.log("Estudantes com pelo menos uma nota menor que 70:");
lowerThan70.forEach(students => {
    console.log(`- ${students.name}`);
});

// Letra d do desafio: obter os nomes dos estudantes com média > 85

const averageHigh = students.filter(student => {
    const sum = student.grades.reduce((accumulator, grade) => accumulator + grade, 0);
    const average = sum / student.grades.length;
    return average > 85;
})
.map(student => student.name);
console.log("Estudantes com média acima de 85:", averageHigh);

