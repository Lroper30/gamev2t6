
var game;
var player;
var platforms;
var items;
var dvdLogo;
var cursors;
var jumpButton;
var text;
var winningMessage;
var deathMessage;
var currentScore = 0;
var winningScore = 80; // Reduced winning score
var won = false;
var hasDied = false; // Track if the player has already died

// Define death messages
var deathMessages = [
    "chicken tenders ohh so slender i wonder what the gender but i put it in my blender",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Womp Womp!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",

    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",

    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "Looks like you need to practice!",
    "That DVD logo is sneaky!",


    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",

    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",

    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",

    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",
    "That DVD logo is sneaky!",

    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",

    "Dora says you need to get better. can you get better",
    "Dora says you need to get better. can you get better",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "More lost then the kids in my basement",
    "atempt 8478744934" ,
    "atempt 8478744934" ,
    "atempt 8478744934" ,
    "atempt 8478744934" ,
    "atempt 8478744934" ,

    "rarer than you winning",
    "Might as well watch it insted of wasting time",
    "Might as well watch it insted of wasting time",
    "Might as well watch it insted of wasting time",


    "Might as well watch it insted of wasting time",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "I am the globaglob shobawobasibiglob ",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "is this fun",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",

    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",


    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "more lost than a kid eating lunchly listening to talk tauh and the thick of it",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "i bet 50 million on your adoption and lost 50 mill that day",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "Gordon Ramsey",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LOST IN A 7ELEVEN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",

    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",
    "LONG BEFORE TIME YOU DIDN'T WIN",


    // Add more death messages as needed...
];

// Add collectible items to the game
function addItems() {
    items = game.add.physicsGroup();

    // Fixed positions for coins and poison on each platform
    platforms.forEach(function(platform) {
        var coinX = platform.x + 30; // Fixed position for coin
        createItem(coinX, platform.y - 60, 'coin');

        var poisonX = platform.x + platform.width - 30; // Fixed position for poison
        createItem(poisonX, platform.y - 60, 'poison');
    });

    createItem(1000, 200, 'star'); // Static star position
}

// Add platforms to the game
function addPlatforms() {
    platforms = game.add.physicsGroup();
    platforms.create(0, 700, 'platform');
    platforms.create(300, 650, 'platform');
    platforms.create(150, 600, 'platform2');
    platforms.create(450, 500, 'platform');
    platforms.create(750, 600, 'platform2');
    platforms.create(100, 400, 'platform');
    platforms.create(400, 350, 'platform2');
    platforms.create(700, 400, 'platform');
    platforms.create(200, 250, 'platform2');
    platforms.create(500, 200, 'platform');
    platforms.create(800, 250, 'platform2');
    platforms.setAll('body.immovable', true);
}

// Create a single animated item
function createItem(left, top, image) {
    var item = items.create(left, top, image);
    item.animations.add('spin');
    item.animations.play('spin', 10, true);
}

// Create the bouncing DVD logo
function createDVDLogo() {
    dvdLogo = game.add.sprite(300, 50, 'dvdLogo'); // Start at the top wall
    dvdLogo.scale.set(0.25); // Make the DVD logo a bit bigger
    game.physics.arcade.enable(dvdLogo);
    dvdLogo.body.velocity.x = 350; // Set speed to 350
    dvdLogo.body.velocity.y = 200; // Set vertical speed
    dvdLogo.body.bounce.set(1);
    dvdLogo.body.collideWorldBounds = true;
}

// When the player collects an item
function itemHandler(player, item) {
    item.kill();
    switch (item.key) {
        case 'coin':
            currentScore += 10;
            break;
        case 'poison':
            currentScore -= 10;
            break;
        case 'star':
            currentScore += 25;
            break;
    }
    if (currentScore >= winningScore && !won) {
        won = true;
        winningMessage.text = "YOU WIN! Final Score: " + currentScore;
    }
}

// When the player collides with the DVD logo
function dvdLogoHandler(player, dvdLogo) {
    if (!hasDied) {
        console.log("Game Over! You hit the DVD logo!");
        var randomIndex = Math.floor(Math.random() * deathMessages.length);
        deathMessage.text = deathMessages[randomIndex];
        deathMessage.visible = true;
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        hasDied = true;
    }
}

// Setup game when the web page loads
window.onload = function () {
    game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
        game.stage.backgroundColor = '#5db1ad';
        game.load.image('platform', 'platform_1.png');
        game.load.image('platform2', 'platform_2.png');
        game.load.spritesheet('player', 'chalkers.png', 48, 62);
        game.load.spritesheet('coin', 'coin.png', 36, 44);
        game.load.spritesheet('poison', 'poison.png', 32, 32);
        game.load.spritesheet('star', 'star.png', 32, 32);
        game.load.image('dvdLogo', 'DVD_VIDEO_logo.png');
    }

    function create() {
        player = game.add.sprite(50, 600, 'player');
        player.animations.add('walk');
        player.anchor.setTo(0.5, 1);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.gravity.y = 500;

        addPlatforms();
        addItems();
        createDVDLogo(); 

        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
        winningMessage = game.add.text(game.world.centerX, 275, "", { font: "bold 48px Arial", fill: "white" });
        winningMessage.anchor.setTo(0.5, 1);
        
        deathMessage = game.add.text(game.world.centerX, game.world.centerY, "", { font: "bold 48px Arial", fill: "white" });
        deathMessage.anchor.setTo(0.5, 0.5);
        deathMessage.visible = false;
    }

    function update() {
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.overlap(player, items, itemHandler);
        game.physics.arcade.overlap(player, dvdLogo, dvdLogoHandler);

        if (!hasDied) { // Prevent movement if dead
            player.body.velocity.x = 0;

            if (cursors.left.isDown) {
                player.body.velocity.x = -300;
                player.scale.x = -1; // Flip the player sprite
                player.animations.play('walk', 10, true);
            } else if (cursors.right.isDown) {
                player.body.velocity.x = 300;
                player.scale.x = 1; // Unflip the player sprite
                player.animations.play('walk', 10, true);
            } else {
                player.animations.stop();
            }

            if (jumpButton.isDown && player.body.touching.down) {
                player.body.velocity.y = -400; // Jump
            }

            text.text = "SCORE: " + currentScore;
        }
    }
};
