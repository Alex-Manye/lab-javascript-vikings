// Iteration 1
function Soldier (health, strength){
    this.health = health;
    this.strength = strength;
    

    this.attack = function (){
        return this.strength;

    }
    
    this.receiveDamage = function (damage){
        this.health -= damage;

    }

}


// Iteration 2
function Viking (name, health, strength) {
    Soldier.call(this,health, strength); 
    this.name = name;

    this.receiveDamage = function(damage){
        this.health -= damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }

    }
    
    this.battleCry = function(){
        return `Odin Owns You All!`;

    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Iteration 3 -> Saxon
function Saxon (health, strength) {
Soldier.call(this, health, strength);


// inherited from Soldier -> attack() method

    this.receiveDamage = function(damage){
        this.health -= damage;

        if (this.health > 0){
            return `$ A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in act of combat`
        }

    }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// Iteration 4 -> War
function War (){
    this.vikingArmy =[];
    this.saxonArmy =[];

    this.addViking = function (Viking){
        vikingArmy.push(Viking);

    }

    this.addSaxon = function (Saxon){
        this.saxonArmy.push(Saxon);
    }

    this.vikingAttack = function (){
       var saxonSoldier = this.saxonArmy[math.floor(math.random() * this.saxonArmy.length)];
       var vikingSoldier = this.vikingArmy[math.floor(math.random() * this.vikingArmy.length)];
       var damageSaxon = saxonSoldier.receiveDamage(vikingSoldier.strength); 
   
        if (saxonSoldier.health <=0){
            this.saxonArmy.splice(this.saxonArmy[saxonSoldier].length ,1);
        }
        return damageSaxon;
    }

    this.saxonAttack = function (){
        var vikingSoldier = this.vikingArmy[math.floor(math.random() * this.vikingArmy.lenght)];
        var saxonSoldier = this.saxonArmy[math.floor(math.random() * this.saxonArmy.length)];
        var damageViking = vikingSoldier.receiveDamage(saxonSoldier.strength);

        if (vikingSoldier.health>=0){
            this.vikingArmy.splice(this.vikingArmy[vikingSoldier].lenght, 1);
        }
        return damageViking;
    }

    this.showStatus = function (){
        if(vikingArmy === 0){
            return `Saxons have fought for their lives and survived another day...`;
        }
        
        if(saxonArmy === 0){
            return `Vikings have won the war of the century!`;
        }

        if(vikingArmy >= 1  && saxonArmy >= 1){
            return `Vikings and Saxons are still in the thick of battle.`;
        }

    }

}
