console.log("\n");
console.log($argument.arg1);
console.log($argument.arg2);

const body = $response.body.replace("<body>", `<body><script>localStorage.setItem("fuck","${$argument.arg1}");localStorage.setItem("sun","${$argument.arg2}");</script><style>.video-item-combination .video-item.waterfall:has(>.aspect-ratio>.overlay>a),.video-item-combination .van-col:has(>.video-item:first-child:last-child>.aspect-ratio>.overlay>a){display:none !important;}</style>`);

console.log("\n");
console.log(body);
console.log("\n");

$done({ body: body });

