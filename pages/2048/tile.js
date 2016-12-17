function Tile(position, value) {
    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;
        switch (this.value) {
        case 2:
            this.content = '苟';
            break;
        case 4:
            this.content = '利';
            break;
        case 8:
            this.content = '国';
            break;
        case 16:
            this.content = '家';
            break;
        case 32:
            this.content = '生';
            break;
        case 64:
            this.content = '死';
            break;
        case 128:
            this.content = '以';
            break;
        case 256:
            this.content = '岂';
            break;
        case 512:
            this.content = '因';
            break;
        case 1024:
            this.content = '祸';
            break;
        case 2048:
            this.content = '福';
            break;
        case 4096:
            this.content = '避';
            break;
        case 8192:
            this.content = '趋';
            break;
        case 16384:
            this.content = '之';
            break;
        default:
            this.content = this.value;
            break;
    }

    this.previousPosition = null;
    this.mergedFrom = null;
}

Tile.prototype = {

    // 记录格子上次的位置
    savePosition: function() {
        this.previousPosition = { 
        	x: this.x, 
        	y: this.y 
        };
    },

    // 更新当前格子的位置
    updatePosition: function(position) {
        this.x = position.x;
        this.y = position.y;
    },

    serialize: function() {
        return {
            position: {
                x: this.x,
                y: this.y
            },
            value: this.value,
            content: this.content
        };
    }
}

module.exports = Tile;
