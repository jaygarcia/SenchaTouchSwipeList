Ext.ns('Ext.ux');


Ext.ux.ListSwipe = Ext.extend(Object, {
    init : function(parent) {
        this.parent = parent;
        Ext.applyIf(parent, this.parentOverrides);

        this.on('itemswipe', this.onParentItemSwipe, this);    
    },
    onParentItemSwipe : function() {

    },
    parentOverrides : {

    }
});
