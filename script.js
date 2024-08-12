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
        this.hitpoints = 10;
    }

    attack(opponent) {
        let damage = this.getDamage();
        opponent.hitpoints -= damage;
        return damage;
    }

    getDamage() {
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
        computerNames[Math.floor(Math.random() * computerNames.length)],
        computerWeapons[Math.floor(Math.random() * computerWeapons.length)],
        computerPhotos[Math.floor(Math.random() * computerPhotos.length)]
    );

    document.getElementById("userName").textContent = userPlayer.name;
    document.getElementById("userWeapon").textContent = userPlayer.weapon;
    document.getElementById("userPhoto").src = userPlayer.photo;

    document.getElementById("computerName").textContent = computerPlayer.name;
    document.getElementById("computerWeapon").textContent = computerPlayer.weapon;
    document.getElementById("computerPhoto").src = computerPlayer.photo;

    document.getElementById("userAttack").onclick = () => {
        let damage = userPlayer.attack(computerPlayer);
        document.getElementById('computerHp').textContent = computerPlayer.hitpoints;
        document.getElementById('res').textContent = `You hit ${computerPlayer.name} for ${damage} damage!`;

        if (computerPlayer.hitpoints <= 0) {
            document.getElementById('res').textContent = `${userPlayer.name} wins!`;
            document.getElementById('userAttack').disabled = true;
        } else {
            let computerDamage = computerPlayer.attack(userPlayer);
            document.getElementById('userHp').textContent = userPlayer.hitpoints;
            document.getElementById('res').textContent += ` ${computerPlayer.name} hit you for ${computerDamage} damage!`;
        }
        if (userPlayer.hitpoints <= 0) {
            document.getElementById('res').textContent = `${computerPlayer.name} wins!`;
            document.getElementById('userAttack').disabled = true;
        }
    };
}

document.getElementById("startGame").addEventListener("click", start);
