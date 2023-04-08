exports.config = {
    specs: [
        "./src/setValue.js"
    ],
    capabilities: [
       {
        browserName: "chrome"
       }
    ],
    runner: "local",
    hostname: "localhost",
    port:9515,
    path: "//",

    //Test framework
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 600000                                                                                                                                                                                                                     
    },
    // Reporter config
    reporters: [
        ['junit',{
            outputDir: './'
        }]
    ]
}