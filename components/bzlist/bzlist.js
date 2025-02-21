getApp(), Component({
    properties: {
        dataList: {
            type: Array
        }
    },
    data: {
        bzList: []
    },
    methods: {
        onItem: function(t) {
            this.triggerEvent("onItem", parseInt(t.currentTarget.id));
        }
    }
});