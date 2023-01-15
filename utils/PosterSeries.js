import wandinha from '../public/images/series/wandinha.jpg'
import walkingdead from '../public/images/series/walkingdead.jpg'
import peakyblinders from '../public/images/series/peakyblinders.jpg'
import got from '../public/images/series/got.jpg'
import houseofdragon from '../public/images/series/houseofdragon.jpg'
import breakingbad from '../public/images/series/breakingbad.jpg'
import vikings from '../public/images/series/vikings.jpg'
import strangerthings from '../public/images/series/strangerthings.jpg'
import friends from '../public/images/series/friends.jpg'
import theboys from '../public/images/series/theboys.jpg'
import prisonbreak from '../public/images/series/prisonbreak.jpg'
import andor from '../public/images/series/andor.jpg'
import moonknight from '../public/images/series/moonknight.jpg'
import gotham from '../public/images/series/gotham.jpg'
import lacasa from '../public/images/series/lacasa.jpg'
import loki from '../public/images/series/loki.jpg'
import dexter from '../public/images/series/dexter.jpg'
import mandalorian from '../public/images/series/mandalorian.jpg'
import sherlock from '../public/images/series/sherlock.jpg'
import peacemaker from '../public/images/series/peacemaker.jpg'

export const getSeries = (idMovie) => {
    switch (idMovie) {
        case 119051:
            return wandinha;
        case 1402:
            return walkingdead;
        case 60574:
            return peakyblinders;
        case 1399:
            return got;
        case 94997:
            return houseofdragon;
        case 1396:
            return breakingbad;
        case 44217:
            return vikings;
        case 66732:
            return strangerthings;
        case 1668:
            return friends;
        case 76479:
            return theboys;
        case 2288:
            return prisonbreak;
        case 83867:
            return andor;
        case 92749:
            return moonknight;
        case 60708:
            return gotham;
        case 71446:
            return lacasa;
        case 84958:
            return loki;
        case 1405:
            return dexter;
        case 82856:
            return mandalorian;
        case 19885:
            return sherlock;
        case 110492:
            return peacemaker;
        default:
            return wandinha;
    }
};