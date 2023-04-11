exports.config = {
    specs: [
        "./src/cssHandle.js"
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
    reporters: [
        ['junit',{
            outputDir: './reported'
        }]
    ]
}