scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.powerUp.play()
    game.showLongText("97gtiyfiky", DialogLayout.Bottom)
    effects.confetti.startScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.powerDown.play()
    game.showLongText("lauyfxhf", DialogLayout.Bottom)
})
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
