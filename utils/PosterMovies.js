import avatar from '../public/images/avatar.jpg'
import blackadam from '../public/images/blackadam.jpg'
import blackpanther from '../public/images/blackpanther.jpg'
import topgun from '../public/images/topgun.jpg'
import spiderman from '../public/images/spiderman.jpg'
import bullettrain from '../public/images/bullettrain.jpg'
import batman from '../public/images/batman.jpg'
import spiderverse from '../public/images/spiderverse.jpg'
import cityofgod from '../public/images/cityofgod.jpg'
import interestelar from '../public/images/interestelar.jpg'
import endgame from '../public/images/endgame.jpg'
import inglorious from '../public/images/inglorious.jpg'
import shutterisland from '../public/images/shutterisland.jpg'
import joker from '../public/images/joker.jpg'
import harrypotter from '../public/images/harrypotter.jpg'
import cruella from '../public/images/cruella.jpg'
import fightclub from '../public/images/fightclub.jpg'
import wallstreet from '../public/images/wallstreet.jpg'
import killbill from '../public/images/killbill.jpg'
import knivesout from '../public/images/knivesout.jpg'

export const getMovies = (idMovie) => {
    switch (idMovie) {
        case 76600:
            return avatar;
        case 436270:
            return blackadam;
        case 505642:
            return blackpanther;
        case 361743:
            return topgun;
        case 634649:
            return spiderman;
        case 718930:
            return bullettrain;
        case 414906:
            return batman;
        case 324857:
            return spiderverse;
        case 598:
            return cityofgod;
        case 157336:
            return interestelar;
        case 299534:
            return endgame;
        case 16869:
            return inglorious;
        case 11324:
            return shutterisland;
        case 475557:
            return joker;
        case 12445:
            return harrypotter;
        case 337404:
            return cruella;
        case 550:
            return fightclub;
        case 106646:
            return wallstreet;
        case 24:
            return killbill;
        case 546554:
            return knivesout;
        default:
            return avatar;
    }
};