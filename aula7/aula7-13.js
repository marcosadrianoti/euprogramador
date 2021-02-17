/*
 Crie uma função que calcule a idade de uma pessoas, dado o dia do seu
nascimento.
*/

const birthDate = "2001/09/30";

console.log(`${age(birthDate)} ano(s)`);

function age(birthDate) {
    const aYearMilisec = 31536000000;
    const today = new Date;
    const endDate = new Date(birthDate);
    const howOld = parseInt((today.getTime() - endDate.getTime())/aYearMilisec);
    
    return howOld;
}