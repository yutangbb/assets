console.log("\n");
console.log($argument.arg1);
console.log("\n");
console.log($argument.arg2);
console.log($response.body);
console.log("\n");
const body = $response.body.replace("<body>", `<body><script>localStorage.setItem("fuck",${$argument.arg1});localStorage.setItem("sun",${$argument.arg2});</script>`);
$done({ body: body });
