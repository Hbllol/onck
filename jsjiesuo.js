$.fn.extend({
			unlock : function(){
				var x = 0 ;
				var boi =this.parent()
				
				var self = this;
				this.mousedown(function(e){
					x = e.pageX-$(this).offset().left ;
					$(document).mousemove(function(e){
						
						self.css("left",e.pageX-x)
                        if(e.pageX-x>boi.width()-self.width()){
                        	alert("解锁成功")
                        	boi.html("小伙子滑的挺6啊");
                        	
                        	$(this).off();
                        }
						
					});
					$(document).mouseup(function(){
						$(this).off();
						if(e.pageX-x<boi.width()-self.width()){
						self.css("left",0)
						}
					});
					return false;
				})
			}

		})
		