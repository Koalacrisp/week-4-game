$(document).ready(function(){

	function titlescreen(){
		$(".heroes").hide();
		$(".healthbar").hide();
		$(".enHealthbar").hide();
		$(".attack").hide();
		$(".enemies").hide();
		$(".enemy").hide();
		$(".titlescreen").slideDown();
	}

	titlescreen();

var player = "";
var enemy = "";
var enemyHealth = $(".enHealthbar");
var newPlayer = $(".heroes");

var dogmeat = {
	Name: "Dogmeat",
	Health: 100,
	Armor: 4,
	Attack: 30
};

var billy = {
	Name: "Billy",
	Health: 100,
	Armor: 0,
	Attack: 60
};

var jack = {
	Name: "Jack",
	Health: 100,
	Armor: 6,
	Attack: 25
};

var radroach = {
	Name: "Radroach",
	Health: 100,
	Armor: 10,
	Attack: 15
};

var radscorpion = {
	Name: "Radscorpion",
	Health: 100,
	Armor: 40,
	Attack: 30
}

var deathclaw = {
	Name: "Deathclaw",
	Health: 100,
	Armor: 20,
	Attack: 50
}

	$(".Play_Button").click(function(){
		$(".titlescreen").slideUp();
		setTimeout(function(){
			$(".titlescreen").hide();
			$(".heroes").fadeIn();
		}, 500);
	});

	$("#Dogmeat").click(function(){
		if(player == "") {
			$(".heroes").fadeOut();
			player = dogmeat;
			$(".healthbar").before(this);
			$(".healthbar").show();
			$(".player").show();
			$(".attack").show();
			$(".enemies").fadeIn();
		}
	});

	$("#Billy").click(function(){
		if(player == "") {
			$(".heroes").fadeOut();
			player = billy;
			$(".healthbar").before(this);
			$(".healthbar").show();
			$(".player").show();
			$(".attack").show();
			$(".enemies").fadeIn();
		}
	});

	$("#Jack").click(function(){
		if(player == "") {
			$(".heroes").fadeOut();
			player = jack;
			$(".healthbar").before(this);
			$(".healthbar").show();
			$(".player").show();
			$(".attack").show();
			$(".enemies").fadeIn();
		}
	});

	$("#radroach").click(function(){
		if(enemy == "") {
			enemy = radroach;
			$(".enHealthbar").before(this);
			$(".enHealthbar").show();
			$(".enemy").show();
		}
	});

	$("#radscorpion").click(function(){
		if(enemy == "") {
			enemy = radscorpion;
			$(".enHealthbar").before(this);
			$(".enHealthbar").show();
			$(".enemy").show();		
		}
	});

	$("#deathclaw").click(function(){
		if(enemy == "") {
			enemy = deathclaw;
			$(".enHealthbar").before(this);
			$(".enHealthbar").show();
			$(".enemy").show();		
		}
	});

	var hBar = $(".healthbar"),
		health = $(".health"),
		enHealth = $(".enHealth")
		damage = player.Attack,
		total = player.Health;

	$(".attack").click(function(){
		if(enemy != "" && player.Health >= 1){
			var newValue = player.Health - (enemy.Attack - player.Armor);
			player.Health = newValue;
			health.css("width", player.Health + "%")

			var enNewValue = enemy.Health - (player.Attack - enemy.Armor);
			enemy.Health = enNewValue;
			enHealth.css("width", enemy.Health + "%");

			if(enemy.Health <= 0){
				enemy = "";
				$(".enemy").fadeOut();
				setTimeout(function(){
					enHealth.css("width", 100 + "%")
					$(".enemy").empty().append(enemyHealth);
				}, 200);
				if (player = dogmeat){
					player.Attack += 30;
					player.Armor += 10;
				}
				if (player = billy){
					player.Attack += 50;
				}
				if (player = jack){
					player.Attack += 40;
					player.Armor += 20;
				}
			}

			if(player.Health <= 0){
				$(".player").fadeOut();
				$(".enemy").fadeOut();
				$(".enemies").fadeOut();
				$(".attack").fadeOut();
				$(".before").before(".player");
				setTimeout(function(){
					alert("Game over! Refresh to restart");
				}, 400);
			}

			var totEnHealth = radroach.Health + radscorpion.Health + deathclaw.Health

			if(totEnHealth <= -10){
				setTimeout(function(){
					alert("You win! Refresh to restart");
				}, 400);
			}

		}
	});

});