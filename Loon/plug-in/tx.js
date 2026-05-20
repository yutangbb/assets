console.log("\n");
console.log($argument.arg1);
console.log($argument.arg2);

const body = $response.body.replace("<body>", `<body><script>localStorage.setItem("fuck","${$argument.arg1}");localStorage.setItem("sun","${$argument.arg2}");</script>`);

console.log("\n");
console.log(body);
console.log("\n");

$done({ body: body });
