const report = require('multiple-cucumber-html-reporter')
var today = new Date()
var date = (('00' + today.getDate()).slice(-2))+'-'+(('00' + (today.getMonth()+1)).slice(-2))+'-'+today.getFullYear()
var time = (('00' + today.getHours()).slice(-2)) + 'h' + (('00' + today.getMinutes()).slice(-2)) + 'm' + (('00' + today.getSeconds()).slice(-2)) + 's'
var dateTime = date+'_'+time
report.generate({
    jsonDir: 'cypress/report/cucumber-json/',
    reportPath: 'cypress/report/cucumber-report',
    metadata:{
        browser: {
            name: 'Chrome',
            version: '86.0.4240.75'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'teste-cypress-contazap-microserviços'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Execution Start Time', value: dateTime},
            {label: 'Execution End Time', value: dateTime}
        ]
    }
})