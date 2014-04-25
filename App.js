Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    // entry point of application
    launch: function() {
        console.log("My first app .... hoo hoo!");
        this._loadData();
    },

    // get data from rally
    _loadData: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success) {
                    //process data
                    console.log("Got data!", myStore, myData, success);
                    this._loadGrid(myStore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },

    // create and show a list of stories
    _loadGrid: function(myStoryStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myStoryStore,
            columnCfgs: [
                'FormattedID', 'Name', 'ScheduleState'
            ]
        });
        console.log("My grid!", myGrid);
        this.add(myGrid);
        console.log("what is this ", this);
    }
});
