scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    effects.confetti.startScreenEffect()
    music.baDing.play()
    game.showLongText("97gtiyfiky", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.showLongText("lauyfxhf", DialogLayout.Bottom)
})
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
