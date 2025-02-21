var t;

t = getApp(), Component({
    properties: {
        dataList: {
            type: Array
        }
    },
    data: {
        bzList: [],
        imgH: Math.floor(t.globalData.screenWidth / 3)
    },
    methods: {
        onItem: function(t) {
            this.triggerEvent("onItem", parseInt(t.currentTarget.id));
        }
    }
});