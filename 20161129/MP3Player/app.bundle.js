/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by plter on 2016/11/29.
	 */

	var List = __webpack_require__(1);

	(function () {

	    var playlistContainer;
	    var playlist;

	    /**
	     * 生成播放列表
	     */
	    function generatePlaylist(files) {
	        // var list = "<ul>";
	        //
	        // for (var i = 0; i < files.length; i++) {
	        //     list += "<li>" + files[i].name + "</li>";
	        // }
	        // list += "</ul>";
	        //
	        // playlistContainer.html(list);

	        playlist.addFiles(files);
	    }

	    function addListeners() {
	        $(document).on("dragover", function (e) {
	            e.preventDefault();
	        }).on("drop", function (e) {
	            e.preventDefault();

	            generatePlaylist(e.originalEvent.dataTransfer.files);
	        });
	    }

	    function buildUI() {
	        playlistContainer = $("#playlist-container");
	        playlist = new List();
	        playlistContainer.append(playlist.getHtmlNode());
	    }

	    function init() {
	        buildUI();
	        addListeners();
	    }

	    init();
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by plter on 2016/11/29.
	 */


	function List() {
	    this._htmlNode = document.createElement("ul");
	    this._mp3Files = [];
	}

	/**
	 * 判断列表中是否已经拥有该文件
	 * @param file
	 * @returns {boolean}
	 */
	List.prototype.hasFile = function (file) {
	    for (var i = 0; i < this._mp3Files.length; i++) {
	        if (this._mp3Files[i].name == file.name) {
	            return true;
	        }
	    }

	    return false;
	};

	List.prototype.addFiles = function (files) {
	    var li, file;
	    for (var i = 0; i < files.length; i++) {
	        file = files[i];

	        if (!this.hasFile(file)) {
	            li = document.createElement("li");
	            li.innerHTML = files[i].name;
	            this._htmlNode.appendChild(li);
	            this._mp3Files.push(file);
	        }
	    }
	};

	List.prototype.getHtmlNode = function () {
	    return this._htmlNode;
	};

	module.exports = List;

/***/ }
/******/ ]);