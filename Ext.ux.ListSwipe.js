Ext.ns('Ext.ux');


Ext.ux.ListSwipe = Ext.extend(Ext.Container, {
    swipeDirection : 'left',
    defaultType    : 'button',
    initComponent : function() {
		var config = {
			layout: {
				type: 'hbox',
				align: 'left',
				pack: 'start'
			}
		};
		
		Ext.apply(this, Ext.applyIf(this.initialConfig, config));
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
