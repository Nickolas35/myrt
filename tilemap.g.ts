// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010104010101010101010101010101010101020104020202020202020201010101010201010101010101010102020101010102010102020202020201010201020202020202020101010102010102010101010101010101010101020101020101010101010101010101010201010201010101010101010101010102010102010101010101010101010101020202020101010101010101010101010102010101010101010101010101010101020101010101020202020202020202020201010101010201010101010101010101010101010102010101010101010101010101010101020101010101010101010101010101010202020202020301010101010101`, img`
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 . . . . . . . . . 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 . 2 2 . . . . . . 2 2 . 2 
. . . . . . . 2 2 2 2 . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.swamp.swampTile16,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
