Ext.ns('Ext.ux');


Ext.ux.ListSwipe = Ext.extend(Ext.Container, {
    swipeDirection : 'left',
    defaultType    : 'button',
    initComponent : function() {
		var config = {
			floating: true,
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
		this.alignAndShowItem(el);
    },
    parentOverrides : {

    },
	
	alignAndShowItem : function(el){
		var ele = Ext.fly(el);
		this.show();
		this.setSize(ele.getSize());
		this.getEl().setXY(ele.getXY());
	}
	
});
