/* eslint-disable no-undef */
import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../deamon';
import Undead from '../undead';
import Zombie from '../zombie';

test('new objec with type zombie', () => {
  const result = new Zombie('Rick', 'Zombie');
  const newObject = {
    name: 'Rick',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(newObject);
});

test('new objec with type bowman', () => {
  const result = new Bowman('Rick', 'Bowman');
  const newObject = {
    name: 'Rick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(newObject);
});

test('new objec with type deamon', () => {
  const result = new Daemon('Rick', 'Deamon');
  const newObject = {
    name: 'Rick',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(newObject);
});

test('new objec with type magician', () => {
  const result = new Magician('Rick', 'Magician');
  const newObject = {
    name: 'Rick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,

  };
  expect(result).toEqual(newObject);
});

test('new objec with type swordsman', () => {
  const result = new Swordsman('Rick', 'Swordsman');
  const newObject = {
    name: 'Rick',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(newObject);
});

test('new objec with type undead', () => {
  const result = new Undead('Rick', 'Undead');
  const newObject = {
    name: 'Rick',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(newObject);
});

test('name less than 2 letters', () => {
  const expected = 'Ошибка!';
  expect(() => new Character('D', 'Daemon')).toThrowError(expected);
});

test('name more than 10 letterss', () => {
  const expected = 'Ошибка!';
  expect(() => new Character('FlorentiusV', 'Undead')).toThrowError(expected);
});

test('name is not a string', () => {
  const expected = 'Ошибка!';
  expect(() => new Character(1234, 'Magician')).toThrowError(expected);
});

test('non-existent type', () => {
  const expected = 'Ошибка!';
  expect(() => new Character('David', 'Bowie')).toThrowError(expected);
});
