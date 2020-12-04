require("ts-node").register({ files: true });
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Rpby5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vd2Rpby5jb25mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUUxQyxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsTUFBTSxFQUFFLE9BQU87SUFDZixLQUFLLEVBQUU7UUFDSCxzQkFBc0I7S0FDekI7SUFDRCxPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFlBQVksRUFBRSxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUM7WUFDZixXQUFXLEVBQUUsUUFBUTtZQUNyQixtQkFBbUIsRUFBRSxJQUFJO1NBQzVCLENBQUM7SUFDRixRQUFRLEVBQUUsTUFBTTtJQUNoQixJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsY0FBYyxFQUFFLEtBQUs7SUFDckIsc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUMxQixTQUFTLEVBQUUsT0FBTztJQUNsQixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEtBQUs7UUFDVCxPQUFPLEVBQUUsS0FBSztLQUNqQjtDQUNKLENBQUEifQ==