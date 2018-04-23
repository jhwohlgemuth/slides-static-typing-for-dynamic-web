module.exports =
`
  /* @flow */
  import {Saiyan} from './types';

  const getName = (hero: Saiyan): string => {
      return hero.name;
  };

  function defeatFrieza(hero: Saiyan): void {
      if (getName(hero) === 'Goku') {
          hero.transform();
      }
  }
  function getPowerLevel(fighter: Saiyan): number {
      return fighter.powerLevel;
  }

`
