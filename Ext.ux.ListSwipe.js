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
//        if (evtObj.direction !== this.swipeDirection) {
//            return;
//        }
        if (! this.anims) {
            this.anims  = this.initAnims();
        }
        console.log(this.anims.slideOut);


        Ext.Anim.run(Ext.get(el), this.anims.slideOut);

		this.alignAndShowItem(el);
    },
	alignAndShowItem : function(el){
		var ele = Ext.fly(el);
		this.show();
		this.setSize(ele.getSize());
		this.getEl().setXY(ele.getXY());
    },
    initAnims : function() {
        var thisList = this.parent;
        return {
            slideIn : new Ext.Anim({
                duration: 250,
                autoClear: false,
                before: function(el){
                    var elLeft = el.getLeft(),
                        elTop  = el.getTop();

                    this.to = {
                        left : '0px',
                        top  : elTop
                    };
                    this.from = {
                        left : Ext.get(thisList.el).getWidth() + 'px', //thisListWidth
                        top  : elTop
                    };
                }
            }),
            slideOut : new Ext.Anim({
                duration: 500,
                autoClear: false,
                before: function(el){
                    el = Ext.get(el);
                    var elLeft = el.getLeft(),
                        elTop  = el.getTop();

                    console.log(Ext.get(thisList.el).getWidth() + 'px')
                    this.to = {
                        left : Ext.get(thisList.el).getWidth() + 'px', //thisListWidth
                        top  : elTop
                    };
                    this.from = {
                        left : elLeft + 'px', //el.getLeft()
                        top  : elTop
                    };
                }
            })
        }
    },
    parentOverrides : {

    }
});
//
//var anim = new Ext.Anim({
//    duration: 3000,
//    autoClear: false,
//    before: function(el){
//        this.to = {
//            left: '100px',
//            top: '400px',
//            width: '200px',
//            height: '300px',
//            'background-color': '#0f0'
//        };
//    }
//});