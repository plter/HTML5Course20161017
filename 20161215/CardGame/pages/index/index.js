//index.js
//获取应用实例

const Renderer = require("../../Renderer");
const Container = require("../../Container");
const Card = require("../../Card");
const Config = require("../../Config");


Page({
    onLoad: function () {
        this._renderer = new Renderer();
        this._root = new Container();
        this._context = wx.createContext();
        this._cards = [];

        this.startGame();
    },

    startGame: function () {
        this._currentNum = 1;

        this.generateAllPoints();
        this.addRandomCard();
    },

    generateAllPoints: function () {
        this._allPoints = [];

        for (let i = 0; i < Config.H_COUNT; i++) {
            for (let j = 0; j < Config.V_COUNT; j++) {
                this._allPoints.push({
                    x: i * Config.CARD_WIDTH,
                    y: j * Config.CARD_HEIGHT
                });
            }
        }
    },

    addRandomCard: function () {
        for (let i = 1; i <= 9; i++) {
            let randomIndex = Math.floor(Math.random() * this._allPoints.length);
            let p = this._allPoints[randomIndex];
            let c = new Card(Config.CARD_WIDTH, Config.CARD_HEIGHT, i + "");
            this._root.addChild(c);
            this._cards.push(c);

            c.x = p.x;
            c.y = p.y;
            this._allPoints.splice(randomIndex, 1);
        }
    },

    cardClicked: function (card) {
        if (card.num == this._currentNum) {
            //remove card from root container
            this._root.removeChild(card);

            //remove card from the cards array
            let index = this._cards.indexOf(card);
            if (index != -1) {
                this._cards.splice(index, 1);
            }

            for (let c of this._cards) {
                c.showVerso();
            }

            if (this._cards.length <= 0) {
                wx.showModal({
                    title: "你好",
                    content: "恭喜你完成挑战"
                });
            }

            this._currentNum++;
        } else {
            wx.showToast({title: "点错了"});
        }
    },

    canvasTapHandler: function (event) {
        let touch = event.touches[0];
        let canvas = event.target;
        let tpX/*touch point x*/ = touch.pageX - canvas.offsetLeft
        let tpY = touch.pageY - canvas.offsetTop;

        for (let c of this._cards) {
            if (c.hitTestPoint(tpX, tpY)) {
                this.cardClicked(c);
                break;
            }
        }
    },

    onReady: function () {
        console.log("onReady");

        this._renderer.addRenderHandler(function () {
            this._context.clearActions();
            this._root.render(this._context);
            wx.drawCanvas({
                canvasId: "game",
                actions: this._context.getActions()
            });
        }.bind(this));
        this._renderer.start();
    },
    onUnload: function () {
        console.log("onUnload");

        this._renderer.stop();
    }
});
