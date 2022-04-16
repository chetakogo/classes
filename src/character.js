export default class Character {
  constructor(name, type) {
    try {
      if ((type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')
          && (name.length >= 2 && name.length <= 10)) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
      } else {
        throw new Error('Неверные данные');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
