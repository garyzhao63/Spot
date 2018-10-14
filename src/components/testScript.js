    //Step 1: initialize communication with the platform
    var platform = new H.service.Platform({
        app_id: 'DemoAppId01082013GAL',
        app_code: 'AJKnXv84fjrb0KIHawS0Tg',
        useCIT: true,
        useHTTPS: true
    });
    var defaultLayers = platform.createDefaultLayers();
    
    //Step 2: initialize a map  - not specificing a location will give a whole world view.
    var map = new H.Map(document.getElementById('map'),
        defaultLayers.normal.map);