let nomeHeroi = "Jonas"
let xpHeroi = 25

switch(true) {
    case xpHeroi < 1000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível ferro`);
      break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível bronze`);
      break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível prata`);
      break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível ouro`);
      break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível platina`);
      break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível ascendente`);
      break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
      console.log(`O Herói chamado ${nomeHeroi} está no nível imortal`);
      break;
    case xpHeroi >= 10001:
      console.log(`O Herói chamado ${nomeHeroi} está no nível radiante`);
      break;
    default:
      console.log(`O Herói chamado ${nomeHeroi} não possui um nível definido`);
}
  


