let linkText = ""

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "title": "リンクテキストをコピーする EPver",
        "type": "normal",
        "id": "parent",
        "contexts": ["link"],
    })

    chrome.contextMenus.onClicked.addListener((item) => {
        saveToClipboard(linkText);
    })
    chrome.runtime.onMessage.addListener((req) => {
        //変数linkTextにclikcEventから送られた要素を入れる
        linkText = req.linkText;
    })

    //テキストをクリップボードにコピーする
    const saveToClipboard = (str) => {
        console.log(str);
        const textArea = document.createElement("textarea");

        document.body.appendChild(textArea);

        textArea.value = str;
        textArea.select();
        document.execCommand("copy");

        document.body.removeChild(textArea);
    }
})

