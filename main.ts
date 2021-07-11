scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.showLongText("YOU WIN!!!", DialogLayout.Bottom)
    music.jumpUp.play()
    effects.confetti.startScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.jumpDown.play()
    game.showLongText("You are not rihgt try again!", DialogLayout.Bottom)
})
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
