console.log('--------------関数----------------');
// 関数の書き方
// function 関数名(){
// 	処理
// }
function myalert(){
	// alert('自作関数からhello');
	// アラートを表示したあとにも自由に処理を追加できる

	let hantei = confirm('このボタン押してもいいですか？')

	console.log(hantei);

// 問題
// OKボタンが押されたら、「大丈夫」、
// キャンセルが押されたら「やり直し」
// とコンソールに表示しましょう。

	if (hantei === true){
		console.log('大丈夫');
	} else {
		console.log('やり直し');
	}

// 文字の変え方
let messageSpan = document.getElementById('message');
messageSpan.textContent = '変わりました';
messageSpan.style.color = 'blue';

// 今日の宿題
// OKボタンが押されたら、「大丈夫」、
// キャンセルが押されたら「やり直し」
// とid="message"のspanタグの部分に表示しましょう。

if (hantei === true){
		messageSpan.textContent = '大丈夫';
		messageSpan.style.color = 'green';
		messageSpan.style.fontSize = '18px';
	} else {
		messageSpan.textContent = 'やり直し';
		messageSpan.style.color = 'red';
		messageSpan.style.fontSize = '24px';
	} 

}


console.log('-----------------関数(引数付き)--------------')
// 関数の書き方
// function 関数名(引数1,引数2,.....){
// 	処理
// }
// 関数とは複数の処理をひとつにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字)　この場合、表示したい文字が引数にあたる

function myalert2(displayMessage){
	alert(displayMessage);
}

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printHoge
// 処理内容：「hoge」とコンソールに表示する

function printHoge(msg){
	console.log(msg);
}

// 作った関数を実行
printHoge('hoge');

// こっちでもOK
// function printHoge(){
// 	console.log('hoge');

// printHoge();


// --------------問題--------------
// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printNum
// 引数：一つの数値
// 処理内容：引数で受け取った数値をコンソールに表示する

function printNum(num){
	console.log(num);
}

printNum(70);


// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printKuku
// 引数：一つの数値
// 処理内容：引数で受け取った数値の九九(１から９までかけた数)をコンソールに表示する
// 引数に１を指定したら、１の段の計算結果がコンソールに表示されるようにする
// 引数に１を指定したら、2の段の計算結果がコンソールに表示されるようにする
// for文は１個で大丈夫です(使わなくても大丈夫です。)

function printKuku(num){
	// let answer = num * 1;	
	// console.log(answer);
	// let answer = num * 2;	
	// console.log(answer);
	// let answer = num * 3;	
	// console.log(answer);
    for (let i = 1; i <= 9; i++) {
    	console.log(num * i)
    }
}

// 3の段
printKuku(3);
// 4の段
printKuku(4);


// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printKakezan
// 引数：2つの数値
// 処理内容：引数で受け取った数値の掛け算をコンソールに表示する


function printKakezan(num1,num2){
	console.log(num1 * num2);
}

printKakezan(3,5);



// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printIsEven
// 引数：1つの数値
// 処理内容：引数で受け取った数値が偶数の場合は「偶数です」と出力し、
// 奇数の場合は「奇数です」と出力する

function printIsEven(num){
	if (num % 2 === 0){
		console.log('偶数です');
	} else {
		console.log('奇数です');
	}
}

printIsEven(5);



// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printMessage
// 引数１：1つの文字列
// 引数2：一つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値文繰り返し出力する
// ドラえもん,4 を指定したら、以下が正解
// ドラえもん
// ドラえもん
// ドラえもん
// ドラえもん

function printMessage(moji,num){
	for (let i = 1; i <= num; i++){
		console.log(moji);
	}
}

printMessage('どらえもん',5);







