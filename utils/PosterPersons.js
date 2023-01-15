import pedropascal from '../public/images/persons/pedropascal.jpg'
import tomhardy from '../public/images/persons/tomhardy.jpg'
import tomholland from '../public/images/persons/tomholland.jpg'
import milliebobby from '../public/images/persons/milliebobby.jpg'
import cillianmurphy from '../public/images/persons/cillianmurphy.jpg'
import tomhanks from '../public/images/persons/tomhanks.jpg'
import leodicaprio from '../public/images/persons/leodicaprio.jpg'
import chrispratt from '../public/images/persons/chrispratt.jpg'
import samueljackson from '../public/images/persons/samueljackson.jpg'
import paulrudd from '../public/images/persons/paulrudd.jpg'
import henrycavill from '../public/images/persons/henrycavill.jpg'
import denzel from '../public/images/persons/denzel.jpg'
import danielcraig from '../public/images/persons/danielcraig.jpg'
import liamneeson from '../public/images/persons/liamneeson.jpg'
import samavatar from '../public/images/persons/samavatar.jpg'
import ryanreynolds from '../public/images/persons/ryanreynolds.jpg'
import wagnermoura from '../public/images/persons/wagnermoura.jpg'
import jackiechan from '../public/images/persons/jackiechan.jpg'
import natalieportman from '../public/images/persons/natalieportman.jpg'
import jenna from '../public/images/persons/jenna.jpg'

2524, 1136406, 31, 1356210, 2037, 1253360, 8784, 3896, 65731, 10859, 6193, 73457, 2231, 52583, 22226, 73968, 5292, 18897, 524, 974169

export const getPersons = (idPerson) => {
    switch (idPerson) {
        case 2524:
            return tomhardy;
        case 1136406:
            return tomholland;
        case 31:
            return tomhanks;
        case 1356210:
            return milliebobby;
        case 2037:
            return cillianmurphy;
        case 1253360:
            return pedropascal;
        case 8784:
            return danielcraig;
        case 3896:
            return liamneeson;
        case 65731:
            return samavatar;
        case 10859:
            return ryanreynolds;
        case 6193:
            return leodicaprio;
        case 73457:
            return chrispratt;
        case 2231:
            return samueljackson;
        case 52583:
            return wagnermoura;
        case 22226:
            return paulrudd;
        case 73968:
            return henrycavill;
        case 5292:
            return denzel;
        case 18897:
            return jackiechan;
        case 524:
            return natalieportman;
        case 974169:
            return jenna;
        default:
            return jenna;
    }
};