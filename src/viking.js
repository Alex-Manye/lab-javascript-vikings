<<<<<<< HEAD
// Soldier
function Soldier(health, strength){
    this.health = health;
    this.strength = strength;
    
    this.attack() = function (){ 
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health = damage;
    }
}

// Viking
function Viking (name, health, strength) {
    Soldier.call (this,health, strength);
    this.name = name;

this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return (`$(this.name) has received $(damage) points of damage`)
    } else {
        return (`$(this.name) has died in act of combat`)
    }
}
    this.battleCry = function BattleCry () {
        return `Odin Owns You All!`
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call (this,health,strength);
    this.receiveDamage = function receiveDamage(damage){
        this.health -= damage; 
        return this.health > 0 ? `A Saxon has received DAMAGE points of damage`: `A Saxon has died in combat`
    //pruebo esta nueva forma de función If else
    }
}

// War
function War() {
    this.vikingArmy = []; //¿porqué no podemos utilizar una variable?
    this.saxonArmy = [];

this.addViking = function addViking (viking) {
    this.viking = viking;
    vikingArmy.push (this.viking)
}
this.addSaxon = function addSaxon (saxon) {
    this.saxon = saxon;
    saxonArmy.push (this.saxon)
}
//el viking attack y el saxon attack no se como plantearlos.
this.vikingAttack = function vikingAttack () {
    saxon.receiveDamage = viking.strength
    let viking = Math.floor(math.random()*this.vinkingArmy.length)
    if (viking.health === 0 ) { 
        vikingArmy.splice(/*dudo que poner*/)
        
}
this.saxonAttack = function saxonAttack () {
    viking.receiveDamage = saxon.strength
    let saxon = Math.floor(math.random()*this.saxonArmy.length)
    if (saxon.health === 0 ) { 
        saxonArmy.splice(/*dudo que poner*/)
} 

this.showStatus = function showStatus () {
   if (saxonArmy === 0) {
    return `Vikings have won the war of the century!`
   } 
   if (vikingArmy === 0) {
    return `Saxons have fought for their lives and survive another day...`
   }
}  if (vikingArmy > 0 ) || (saxonArmy > 0 ) {
    return `Vikings and Saxons are still in the thick of battle`
}
}
=======
// Iteration 1
function Soldier (health, strength){
    this.health = health;
    this.strength = strength;
    

    this.attack = function (){
        return this.strength

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
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }
    
    this.battleCry = function(){
        return `Odin Owns You All!`

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
       let saxonSoldier = this.saxonArmy[math.floor(math.random()*this.saxonArmy.length)];
       let vikingSoldier = this.vikingArmy[math.floor(math.random()*this.vikingArmy.length)];
       let damageSaxon = saxonSoldier.receiveDamage(vikingS.strength); 
   
        if (saxonSoldier.health <=0){
            this.saxonArmy.splice(this.saxonArmy[saxonSoldier].length ,1);
        }
        return damageSaxon;

    }



    this.saxonAttack = function (){
        
    }

    this.showStatus = function (){

        
    }

}









>>>>>>> refactoring iterations 1 to 3
