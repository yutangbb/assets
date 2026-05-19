(function () {
    const body = $response.body.replace("<body>", `<body><script>localStorage.setItem("fuck",${$argument.arg1});localStorage.setItem("sun",${$argument.arg2});</script>`);
    $done({body:body});
})();