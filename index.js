const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  };
  const magma = {
    name: 'Мечник',
    type: 'Lowman',
    health: 60,
    level: 2,
    attack: 50,
    defence: 1
  };
  
  class Team {
    constructor() {
      this.characters = []; // массив для хранения персонажей
    }
  
    addCharacter(character) {
      this.characters.push(character); // добавление персонажа в команду
    }
  
    [Symbol.iterator]() {
      let index = 0;
  
      return {
        next: () => {
          if (index < this.characters.length) {
            return {
              value: this.characters[index++],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
  }
  
  // Пример использования
  const team = new Team();
  team.addCharacter(char);
  team.addCharacter(magma);
  team.addCharacter(char); // Lобавляем несколько персонажей
  
  for (const character of team) {
    console.log(character);
  }
  