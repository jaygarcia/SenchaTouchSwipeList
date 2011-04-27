Ext.setup({

    onReady : function() {
        var list = new Ext.List({
            store   : 'myStore',
            itemTpl : '{name}',
            plugins : [
                new Ext.ux.ListSwipe({

                    items : [
                        {
                            text : 'm1'
                        },
                        {
                            text : 'm2'
                        },
                        {
                            text : 'm3'
                        },
                        {
                            text : 'm4'
                        }
                    ]
                })
            ]
        });


        new Ext.Panel({
            fullscreen : true,
            layout     : 'fit',
            items      : [ list ]
        })
    }
});


var data = [
    {
        name : 'item 1'
    },
    {
        name : 'item 2'
    },
    {
        name : 'item 3'
    },
    {
        name : 'item 4'
    },
    {
        name : 'item 5'
    },
    {
        name : 'item 6'
    },
    {
        name : 'item 7'
    },
    {
        name : 'item 8'
    },
    {
        name : 'item 9'
    },
    {
        name : 'item 10'
    }
];


Ext.regModel('model', {
    fields   : ['name']
});

Ext.regStore('myStore', {
    model : 'model',
    data  : data
});

