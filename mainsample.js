enchant();

window.onload = function () {
    
    
	var core = new Core(320, 320);
        core.preload('chara5.png');
        core.onload = function(){
            var knight = new Sprite(32, 32);
            knight.image = core.assets['chara5.png'];
            knight.x = 0;
            knight.y = 0;
	    //初期画像フレーム位置
            knight.frame = 0;

            knight.addEventListener('enterframe', function() {
                if (core.input.left) {
                    this.x -= 5;
		    if((this.frame < 11) && (this.frame >= 9)) {
			this.frame++;
		    }else{
			this.frame = 9;
		    }
		}
                if (core.input.right) {
                    this.x += 5;
		    if((this.frame < 20) && (this.frame >= 18)) {
			this.frame++;
		    }else{
			this.frame = 18;
		    }
		}
                if (core.input.up) {
                    this.y -= 5;
		    if((this.frame < 29) && (this.frame >= 27)) {
			this.frame++;
		    }else{
			this.frame = 27;
		    }
		}
                if (core.input.down) {
		    this.y += 5;
                    if ((this.frame < 2) && (this.frame >= 0)) {
                        this.frame++;
		    }else{
			this.frame = 0;
		    }
		}


            });

            

            core.rootScene.on('touchstart', function(e) {
		knight.x = e.x;
                knight.y = e.y;
             });
                   

            core.rootScene.addChild(knight);
	    
        }

   
    core.start();
};