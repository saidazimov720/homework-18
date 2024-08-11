const userN = document.getElementById("name").value;
const userW = document.getElementById("weapon").value;
const userP = document.getElementById("photo").value;
const computerNames = ["SubZero", "Scorpion", "Kitana"];
const computerWeapons = ["sword", "axe", "bow"];
const computerPhotos = [];

class Player {
    constructor(name, weapon, photo) {
        this.name = name;
        this.weapon = weapon;
        this.photo = photo;
    }

    attack(opponent){
        let damage = this.getDamage();
        opponent.hitpoints -= damage;
        return damage;
    }
    getDamage(){
        switch (this.weapon) {
            case 'sword':
                return 3;
            case 'axe':
                return 4;
            case 'bow':
                return 2;
            default:
                return 1;
        }
    }
}

function start() {
    const userPlayer = new Player(userN, userW, userP);
    const computerPlayer = new Player(
        computerNames[Math.floor(Math.random()* computerNames.length)],
        computerNames[Math.floor(Math.random()* computerWeapons.length)],
        computerNames[Math.floor(Math.random()* computerPhotos.length)]
    )
    document.getElementById("userName").textContent = userPlayer.name;
    document.getElementById("userWeapon").textContent = userPlayer.weapon;
    document.getElementById("userPhoto").src = userPlayer.photo;

    document.getElementById("computerName").textContent = computerPlayer.name;
    document.getElementById("computerWeapon").textContent = computerPlayer.weapon;
    document.getElementById("computerPhoto").src = computerPlayer.photo;

    
}