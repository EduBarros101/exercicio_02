let studentsList = []
let teacherName = ''

function getStudentsValue() {
  teacherName = prompt(
    `Olá, professor(a)! Por favor, entre com o seu nome a seguir:`
  )

  alert(`Muito obrigado, ${teacherName}! Você está logado.`)
  alert('A seguir, serão solicitados os dados de três alunos.')

  while (studentsList.length < 3) {
    let studentPosition = studentsList.length + 1
    let student = {}

    student.name = prompt(
      `${teacherName}, digite o nome do aluno número ${studentPosition}:`
    )

    student.firstGrade = Number(
      prompt(`${teacherName}, digite a primeira nota de ${student.name}:`)
    )

    student.secondGrade = Number(
      prompt(`${teacherName}, digite a segunda nota de ${student.name}:`)
    )

    studentsList.push(student)
  }
}

function studentAverage(students) {
  for (let student in students) {
    let average =
      (students[student].firstGrade + students[student].secondGrade) / 2

    let approved =
      average >= 7
        ? `Parabéns, ${students[student].name}! Você foi provado(a)!`
        : `Ainda não foi dessa vez, ${students[student].name}. Continue se preparando.`

    alert(
      `O aluno ${students[student].name} ficou com a média ${average.toFixed(
        2
      )}.

      ${approved}`
    )
  }
}

function studentFinals() {
  getStudentsValue()

  alert('Seguem as médias dos seus alunos:')

  studentAverage(studentsList)
}

studentFinals()
