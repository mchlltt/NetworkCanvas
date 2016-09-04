/* exported protocol */
/* global window */
var protocol = {
    sessionParameters: {
        name: 'Default' // The only currently implemented patameter
    },
    skipFunctions: {
        /*

        Skip functions can evaluate any of the existing interview data to determine if a given stage
        should be shown.

        If a skip function is defined for a given stage, it is evaluated before the stage is initialised.

        If a stage is to be skipped, the skip function should return true. It should always return false
        in all other cases.

        */

        exampleSkip: function() {
            /*
            Session data is available here under the global namespace window.netCanvas.Modules.session.sessionData
            Network data can be accessed at window.network
            */

            return false;
        }
    },
    stages: [
        {
            icon: 'fa-bullseye', // This can be anything from FontAwesome (http://fontawesome.io/)
            label:'Introduction', // The label that is visible in the main menu
            page:'intro.html', // The html file in the 'stages' folder that contains this stage
            skip: function() { return window.netCanvas.Modules.session.skipFunctions.exampleSkip();} // An example skip function. See above for details.
        },
        {icon: 'fa-bullseye', label:'Name Generator', page:'namegen.html' },
        {icon: 'fa-bullseye', label:'Layout', page:'layout.html'},
        {icon: 'fa-bullseye', label:'Edge Creation', page:'edges.html'},
        {icon: 'fa-bullseye', label:'Multibin', page:'multibin.html'},
        {icon: 'fa-bullseye', label:'Ordinal Bin', page:'ordbin.html'},
        {icon: 'fa-bullseye', label:'List Select', page:'listselect.html'},
        {icon: 'fa-bullseye', label:'Finish', page:'finish.html'}
    ]
};
