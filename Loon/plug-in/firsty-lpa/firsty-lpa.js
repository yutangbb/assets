// 脚本抓包获取 LPA 和 ICCID
const body = JSON.parse($response.body);

// 获取 eSIM 信息
const esim = body?.data?.esim;

let lpa = esim?.activationCode;
let iccId = esim?.iccId;

// 检查数据
if (!lpa || !iccId) {
    console.log('未获取到 eSIM 信息');
    console.log($response.body);
    $notification.post(
        'Firsty eSIM 获取',
        '',
        '获取失败：未找到激活码或 ICCID'
    );
    $done({});
    return;
}

// 控制台输出
console.log(`激活码：${lpa}`);
console.log(`ICCID：${iccId}`);

// 通知
$notification.post(
    'Firsty eSIM 获取',
    `ICCID：${iccId}`,
    'eSIM 激活码获取成功。点击复制并查看',
    {
        'mediaUrl': 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7d/53/5f/7d535fa5-f78a-9a66-21ae-b462069fa905/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/114x114bb.png',
        'clipboard': lpa
    }
);

$done({});