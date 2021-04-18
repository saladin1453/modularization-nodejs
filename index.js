const Tiger = require('./Tiger.js');
const Wolf = require('./Wolf.js');

const macan = new Tiger();
const serigala = new Wolf();

function fighthing(macan, serigala) {
    if (macan.strength > serigala.strength) {
        macan.growl();
        console.log('macan menang');
    }else if (serigala.strength > macan.strength) {
        serigala.howl();
        console.log('Serigala menang');
    }else {
        console.log('Imabang');
    }
}

fighthing(macan, serigala)