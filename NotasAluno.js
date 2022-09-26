const aluno = "Isaque Santos Cascaes"
const turma = "PDA-2"
var bimestre1 = 9
var bimestre2 = 6
var bimestre3 = 7
var bimestre4 = 7

const NotaAluno = (bimestre1 + bimestre2 + bimestre3 + bimestre4) / 4

if (NotaAluno >= 7) {
    console.log("O aluno" + ' ' + aluno + ' ' + "da turma " + turma + '' + " tirou a nota: " + NotaAluno + ' ' + "Meus parabéns, você passou de ano!")
}
else {
    console.log("O aluno" + ' ' + aluno + ' ' + "da turma " + turma + '' + " tirou a nota" + ' ' + NotaAluno + ' ' + "e por esse motivo, reprovou de ano!")
}