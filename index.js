const hero = {
    name: "Batman",
    health: 100,
    heatEnemy: enemy => enemy.health -= 10
};
const enemy = {
    name: "Joker",
    health: 100,
    heatHero: hero => hero.health -= 10
};

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0)
        getRandomNumberInRange(0, 1) ? enemyPlayer.heatHero(heroPlayer) : heroPlayer.heatEnemy(enemyPlayer);
    const victor = heroPlayer.health > enemyPlayer.health ? heroPlayer : enemyPlayer;
    alert(`${victor.name} победил! У него осталось ${victor.health} здоровья`)
}

startGame(hero, enemy);

