//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem){ 	
	// elem에 emplowlist들이 담겨있다. row들이 담겨있다! [row, row..] 
	$table = $("<table border=1>");
	// table을 새로 만드는데, border 속성 설정
	//$table = jq객체가 담겨져있는 변수. 앞에 var가 없는 이유는 생략이 가능한데, 생략하면 window객체가 된다. window가 가진 변수  
	// load.. alert.. 등 js 변수 호이스팅을 공부하면 쉽게 알 수 있다. 전역변수가 되는듯?  
	
	
	//컬럼 정의하기
	//컬럼 이름 한줄 생성(1번 반복한다.) 밑에꺼랑 비교하라고 1번도는데 굳이 만들어놈
	for(var i =0; i<1;i++){ 
		// tr 태그를 만든다. 
		$tr=$("<tr>");	// <tr></tr>
		for(var j=0; j<elem.eq(0).children().length;j++){
			// 0번지 값의 children(5)만큼 반복을 하는데, row의 자식 요소를 하나씩 넣는다. 
			// Employee_id, Last name...
			$td=$("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			// td를 만들어서 append한다. append:자식요소의 제일 뒤에 추가
			// <tr>
			// 		<td>tagName</td>
			//		<td>Last_name</td> .... 이렇게 마지막에 추가한다. 
			//</tr>
			$tr.append($td);
			
		}
		$table.append($tr);
		// table에 tr을 넣어준다.
	}
	
	//데이터 넣기
	//row의 갯수만큼 for문을 반복한다. 
	for(var i =0; i<elem.length;i++){
		$tr=$("<tr>"); // tr태그를 만든다. 
		for(var j=0; j<elem.eq(i).children().length;j++){
			$td=$("<td>").append(elem.eq(i).children().eq(j).text());	//text는 j번지의 text값이다. 
			// td에 row의 자식요소들을 넣는다.  
			$tr.append($td);
			// tr밑에 $td를 넣어라
		}
		$table.append($tr);
		// table 밑에 $tr를 넣어라
	}
	
	//만들어진 테이블 반환
	return $table;
}



