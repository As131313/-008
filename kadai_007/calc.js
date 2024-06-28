function checkMultiple() {
    var num = parseInt(document.getElementById('numberInput').value);
    var resultElement = document.getElementById('result');

    if (isNaN(num)) {
        resultElement.textContent = "有効な数値を入力してください";
        console.log("有効な数値を入力してください");
        return;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        resultElement.textContent = "3と5の倍数です";
        console.log("3と5の倍数です");
    } else if (num % 3 === 0) {
        resultElement.textContent = "3の倍数です";
        console.log("3の倍数です");
    } else if (num % 5 === 0) {
        resultElement.textContent = "5の倍数です";
        console.log("5の倍数です");
    } else {
        resultElement.textContent = "どちらでもありません。";
        console.log("どちらでもありません。");
    }
}