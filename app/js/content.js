import rangy from 'rangy/lib/rangy-core.js';
import rangyHighlight from 'rangy/lib/rangy-highlighter';
import rangyClassApplier from 'rangy/lib/rangy-classapplier';
import rangyTextRange from 'rangy/lib/rangy-textrange';
import rangySerializer from 'rangy/lib/rangy-serializer';

function sendMessage(message, callback) {
	chrome.extension.sendMessage(message, callback);
}

sendMessage('test', function(res) {
	console.log(res);
});

function Menu() {
	rangy.init();

	this.highlighter = rangy.createHighlighter();

	this.highlighter.addClassApplier(rangy.createClassApplier("highlight", {
		ignoreWhiteSpace: true,
		tagNames: ["span"]
	}));


	this.lastSelected = '';
	var body = document.querySelector('body');

	body.onmouseup = function(e) {
		menu.onmouseup(e);
	};

	body.onscroll = function() {
		menu.hideMenu();
	};

	body.onclick = function(e) {
		var id = e.target.id;
		switch (id) {
			case 'menu-add':
				note.add(this.lastSelected);
				break;
		}
	}.bind(this);



	this.createMenu();
}

Menu.prototype.showMenu = function(x, y) {
	var menu = this.getMenu();
	menu.style.display = 'block';
	menu.style.top = y + 'px';
	menu.style.left = x + 'px';
};

Menu.prototype.hideMenu = function() {
	var menu = this.getMenu();
	menu.style.display = 'none';
};

Menu.prototype.createMenu = function() {
	var menu = document.createElement('div');
	menu.id = 'menu';
	menu.style.display = 'block';
	menu.style.position = 'fixed';

	menu.innerHTML = '<div id="menu-add">添加至摘录本</div>';

	document.querySelector('body').appendChild(menu);
};

Menu.prototype.getMenu = function() {
	return document.querySelector('#menu');
};

Menu.prototype.onmouseup = function(e) {
	// 对选中的文字进行高亮
	this.highlighter.highlightSelection("highlight");

	var selectedText = window.getSelection().toString().trim();
	selectedText ? this.showMenu(e.x, e.y) : this.hideMenu();
	this.lastSelected = selectedText || this.lastSelected;
};

function Note() {
	this.notes = [];

	this.createNote();
}

Note.prototype.createNote = function() {
	var note = document.createElement('div');
	note.id = 'note';

	document.querySelector('body').appendChild(note);
};

Note.prototype.getNote = function() {
	return document.querySelector('#note');
};

Note.prototype.add = function(text) {
	this.notes.push(text);
	this.render();
	console.log('当前notes', this.notes);
};

Note.prototype.render = function() {
	var html = '';
	this.notes.forEach(function(note) {
		html += '<p>' + note + '</p>';
	});

	this.getNote().innerHTML = html;
};



var menu = new Menu();
	var note = new Note();

