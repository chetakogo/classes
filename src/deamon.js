import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Deamon');
    this.attack = 10;
    this.defence = 40;
  }
}
