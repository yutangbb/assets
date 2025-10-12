// https://raw.githubusercontent.com/yutangbb/assets/main/Loon/script/steam-totp.js
const key = '6b1ad0ef-d644-4cc9-b0ea-50e519752b67';
(function () {
    console.log('\n');
    if (typeof $request === 'undefined') {
        console.log('已保存的Steam令牌：');
        console.log($persistentStore.read(key));
    }
    else if ($request?.url.startsWith('https://api.steampowered.com/ITwoFactorService/AddAuthenticator/v1')) {
        const match = /otpauth:\/\/totp\/Steam:(.+?)\?.+?&issuer=Steam/gi.exec(bytesToString($response.body));
        const content = match?.[0] ?? null;
        const account = match?.[1] ?? null;
        if (content) {
            
            console.log('Steam令牌获取成功：');
            console.log(content);
            // 保存并通知
            $persistentStore.write(content, key);
            $notification.post('Steam令牌获取', '', `Steam 账户 ${account} 获取成功，完成验证后生效。点击复制并查看`, {
                'mediaUrl': 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Steam.png',
                'clipboard': content
            });
        }
        else {
            console.log(`未获取到Steam令牌`);
        }
    }
    console.log('\n');
    $done({});
})();

function bytesToString(body) {
    const uint8 = new Uint8Array(Object.keys(body).length);
    Object.keys(body).sort((a, b) => a - b).forEach((k, i) => uint8[i] = body[k] & 0xFF);
    const str = typeof TextDecoder !== 'undefined'
        ? new TextDecoder().decode(uint8)
        : String.fromCharCode.apply(null, uint8);
    return str;
}