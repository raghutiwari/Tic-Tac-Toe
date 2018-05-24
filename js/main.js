var play1;
var play2;
var players=0;
var sword1='';
var sword2='';
var turn =1;
var playedby1='';
var playedby2='';
var playedbycomp='';
var array =['1','2','3','4','5','6','7','8','9'];
var winn =['147','123','456','789','258','369','159','357'];
var winner=0;
var clicked=0;
var clickedby1=0;
var clickedby2=0;
var count=0;
var flag=[0,0,0];
$(document).ready(function(){

$('#onep').click(function (){
		$('.field').fadeOut(800);
		$('.shape').fadeIn(800);
		players=1;
		// $('.gamefield').fadeIn(800).addClass('grid');	
		// $('.options').fadeIn(800);	

});
$('#twop').click(function (){
		$('.field').fadeOut(800);
		$('.shape').fadeIn(800);
		players=2;
		// console.log(players);

		// $('.gamefield').fadeIn(800).addClass('grid');	
		// $('.options').fadeIn(800);	
});

$('#cross').click(function (){
		// $('.field').fadeOut(800);
		// $('.shape').fadeIn(800);
		$('.gamefield').fadeIn(800).addClass('grid');	
		$('.options').fadeIn(800);	
		$('.shape').fadeOut(800);
		sword1='X';
		sword2='O';

});
$('#zero').click(function (){
		// $('.field').fadeOut(800);
		// $('.shape').fadeIn(800);
		$('.gamefield').fadeIn(800).addClass('grid');	
		$('.options').fadeIn(800);	
		$('.shape').fadeOut(800);
		sword1='O';
		sword2='X'
});

$('#reset').click(function(){
		winner=0;
		turn=1;
		playedby1='';
		playedby2='';
		playedbycomp='';
		clickedby1=0;
		clickedby2=0;
		$('.options').fadeOut(800);
		$('.gamefield').fadeOut(10);
		$('.gamefield').removeClass('grid');
		$('.field').fadeIn(800);
		$('#1,#2,#3,#4,#5,#6,#7,#8,#9').text('place');
		$('#1,#2,#3,#4,#5,#6,#7,#8,#9').data('editor-disabled',false);


});
$('#1,#2,#3,#4,#5,#6,#7,#8,#9').on('click',function(){
	if(players==2){

	var disabled = $(this).data("editor-disabled");
	if(!disabled){
	clicked++;
	console.log(clicked);
	if(winner==0){

		if(turn ==1){
				$(this).text(sword1);
				// console.log(this.id);
				checkedby1(this.id);
				turn=2;				
				if(winner==1){
					clicked=0;
					alert('Player '+ winner + ' wins!!');


				}
				else if(winner==0 && clicked==9){
					alert('Match Drawn!');
				}

		}
		else if(turn==2){
			$(this).text(sword2);
			checkedby2(this.id);
			turn=1;
			if(winner==2){
				clicked=0;
				alert('Player '+ winner + ' wins!!');
			}
			else if(winner==0 && clicked==9){
					alert('Match Drawn!');
				}			
		}
	}
	$(this).data('editor-disabled',true);
	}

	}
	else if(players==1){
						var disabled = $(this).data("editor-disabled");
						if(!disabled){
						clicked++;
						console.log(clicked);
						if(winner==0){

							if(turn ==1){
									clickedby1++;
									$(this).text(sword1);
									// console.log(this.id);
									checkedby1(this.id);
									turn=2;				
									if(winner==1){
										clicked=0;
										alert('Player '+ winner + ' wins!!');
										return;

									}
											
										checkedbycomp(this.id);
										turn=1;
									if(winner==2){
										clickedby1=0;
										alert('Computer Wins!');
										return;
									}
									else if(winner==0 && clickedby1==5){
										alert('Match Drawn!');
									}
									//delay;

							}
							// else if(turn==2){
							// 		clickedby2++;
							// 		$(this).text(sword2);
							// 		checkedbycomp(this.id);
							// 		turn=1;
							// 		if(winner==2){
							// 			clicked=0;
							// 			alert('Computer wins!!');
							// 		}
							// 		else if(winner==0 && clicked==9){
							// 				alert('Match Drawn!');
							// 			}			
							// }
						}
						$(this).data('editor-disabled',true);
						}

	}
});


function checkedby1(box){
	playedby1+=box;
	for(var i=0;i<winn.length;i++){

		if(playedby1.indexOf(winn[i][0])>=0 && playedby1.indexOf(winn[i][1])>=0 && playedby1.indexOf(winn[i][2])>=0){
				console.log("Player 1 Wins");
				winner=1;
				return;
		}


	}

}
function checkedby2(box){
	playedby2+=box;
		for(var i=0;i<winn.length;i++){

		if(playedby2.indexOf(winn[i][0])>=0 && playedby2.indexOf(winn[i][1])>=0 && playedby2.indexOf(winn[i][2])>=0){
				console.log("Player 2 Wins");
				winner=2;
				return;
		}


	}

}
function checkedbycomp(lastmove){
	if(lastmove!='5' && playedbycomp.indexOf('5')<0 && playedby1.indexOf('5')<0){
		playedbycomp+='5';
		$('#5').text(sword2);
	}
	else{

		if(clickedby1==1){
			playedbycomp+='9';
			$('#9').text(sword2);
		}
		else{

			for(var i=0;i<winn.length;i++){
				flag=[0,0,0];
				count=0;
				for(var j=0;j<3;j++){
					if(playedbycomp.indexOf(winn[i][j])>=0){
						flag[j]=1;
						count++;
					}
				}
				if(count==2){
					for(var k=0;k<3;k++){
						if(flag[k]==0 && playedbycomp.indexOf(winn[i][k])<0 && playedby1.indexOf(winn[i][k])<0){
							playedbycomp+=winn[i][k];
							$('#'+winn[i][k]).text(sword2);
							checkcompwin();
							return;
						}
					}
				}
			}

			for(var i=0;i<winn.length;i++){
				flag=[0,0,0];
				count=0;
				for(var j=0;j<3;j++){
					if(playedby1.indexOf(winn[i][j])>=0){
						flag[j]=1;
						count++;
					}
				}
				if(count==2){
					for(var k=0;k<3;k++){
						if(flag[k]==0 && playedbycomp.indexOf(winn[i][k])<0 && playedby1.indexOf(winn[i][k])<0){
							playedbycomp+=winn[i][k];
							$('#'+winn[i][k]).text(sword2);
							checkcompwin();
							return;
						}
					}
				}
			}

			for(var i=1;i<=9;i++){
				switch(i){
					case 9:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}
					break;				
					case 3:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}			
					break;
					case 7:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}			
					break;

					case 1:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}
					break;
					case 2:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}
					
					break;
					case 5:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}
					
					break;
					case 6:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}	
									
					break;
					case 8:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}
										
					break;
					case 4:
					if(playedbycomp.indexOf(i.toString())<0&&playedby1.indexOf(i.toString())<0){
					playedbycomp+=i.toString();
					$('#'+i.toString()).text(sword2);
					checkcompwin();
					return;
					}		
					break;
				}

			}

				

				
		
			}



	
		}
		



		






}
function checkcompwin(){
	console.log('Total Played: '+ playedbycomp);
		for(var i=0;i<winn.length;i++){

		if(playedbycomp.indexOf(winn[i][0])>=0 && playedbycomp.indexOf(winn[i][1])>=0 && playedbycomp.indexOf(winn[i][2])>=0){
				console.log("Player 2 Wins");
				winner=2;
				return;
		}


	}

}

});
