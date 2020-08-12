const message = document.querySelector("h1")?.textContent
//代入の左辺は string 型で宣言しているのに、右辺の式が string | null | undefined 型の値を返していたことがエラーの原因でした。
// 宣言時の型アノテーションをなくしたことで、両辺の型が一致してエラーがなくなります。

console.log(message)
