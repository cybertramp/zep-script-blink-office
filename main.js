/*
*
* Fucking JS :)
*
* JS 혐오를 멈춰주세요 :(
*	JS 많관부 :)
*
*/

// App.onInit.Add(function(){
	// // 최초 시작될때 호출
	// App.sayToAll("Hello world!");
// })

// App.onStart.Add(function(player){
	// App.sayToAll(`id: ${player.id} name: ${player.name}`);
	
// })

// 압축 명령어
// npx zep-script archive

let statusCode = 0;

App.onJoinPlayer.Add(function(player){
	// Player가 들어왔을때 동작하는 함수
	App.showCenterLabel(`${player.name} 입장 부대 차렷. 🧙‍♂️`);
	App.sayToAll("=============================================");
	App.sayToAll(`접속 정보 id: ${player.id} name: ${player.name}`);
	App.sayToAll("=============================================");
	App.sayToAll("상태메시지 변경: 휴식중(6) / 공부중(7) / 식사중(8) / 외출중(9)");
	player.title = "놀러옴";
	player.sendUpdated();
});

App.addOnKeyDown(54, function(player){
	// Keycode가 눌렸을때 동작하는 함수
	// keycode 54 -> 6번
	if (statusCode !== 6) {
		statusCode = 6;
		player.title = "휴식중";
		player.sendUpdated();
		App.sayToAll(`${player.name}님이 상태를 휴식중(6)으로 전환합니다.`);
	} else {
		return;
	}
});

App.addOnKeyDown(55, function(player){
	// Keycode가 눌렸을때 동작하는 함수
	// keycode 55 -> 7번
	if (statusCode !== 7) {
		statusCode = 7;
		player.title = "공부중";
		player.sendUpdated();
		App.sayToAll(`${player.name}님이 상태를 공부중(7)으로 전환합니다.`);
	} else {
		return;
	}
});

App.addOnKeyDown(56, function(player){
	// Keycode가 눌렸을때 동작하는 함수
	// keycode 56 -> 8번
	if (statusCode !== 8) {
		statusCode = 8;
		player.title = "식사중";
		player.sendUpdated();
		App.sayToAll(`${player.name}님이 상태를 식사중(8)으로 전환합니다.`);
	} else {
		return;
	}

});

App.addOnKeyDown(57, function(player){
	// Keycode가 눌렸을때 동작하는 함수
	// keycode 57 -> 9번
	if (statusCode !== 9) {
		statusCode = 9;
		player.title = "외출중";
		player.sendUpdated();
		App.sayToAll(`${player.name}님이 상태를 외출중(9)으로 전환합니다.`);
	} else {
		return;
	}
});

