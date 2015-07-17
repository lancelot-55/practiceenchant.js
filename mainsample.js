enchant();

window.onload = function () {
    
    
	var core = new Core(320, 320);
        core.preload('chara5.png');
        core.onload = function(){
            var knight = new Sprite(32, 32);
            knight.image = core.assets['chara5.png'];
            knight.x = 0;
            knight.y = 0;
            knight.frame = 7;

            knight.addEventListener('enterframe', function() {
                if (core.input.left) this.x -= 5;
                if (core.input.right) this.x += 5;
                if (core.input.up) this.y -= 5;
                if (core.input.down) this.y += 5;
		
            });

            

            core.rootScene.on('touchstart', function(e) {
		knight.x = e.x;
                knight.y = e.y;
             });
                   

            core.rootScene.addChild(knight);
	    
        }

   
    core.start();
};