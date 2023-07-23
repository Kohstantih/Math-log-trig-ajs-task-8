import Magician from './Magician';
import Daemon from './Daemon';

const magic = new Magician();
const daemon = new Daemon();

magic.setStoned();
magic.setDamage(3);

daemon.setStoned();
daemon.setDamage(5);
