Ext.ns('Ext.ux');


Ext.ux.ListSwipe = Ext.extend(Ext.Container, {
    swipeDirection : 'left',
    defaultType    : 'button',
    initComponent : function() {

        Ext.ux.ListSwipe.superclass.initComponent.call(this);
    },
    init : function(parent) {
        this.parent = parent;
        Ext.applyIf(parent, this.parentOverrides);

        parent.on('itemswipe', this.onParentItemSwipe, this);
    },
    onParentItemSwipe : function(list, index, el, evtObj) {
        if (evtObj.direction !== this.swipeDirection) {
            return;
        }
        console.log(evtObj);

    },
    parentOverrides : {

    }
});
