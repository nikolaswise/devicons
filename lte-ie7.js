/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'front-end-stack\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-compassfront' : '&#x63;&#x6f;&#x6d;&#x70;&#x61;&#x73;&#x73;',
			'icon-compassback' : '&#x63;&#x6f;&#x6d;&#x70;&#x61;&#x73;&#x73;&#x62;&#x61;&#x63;&#x6b;',
			'icon-compass' : '&#x63;&#x6f;&#x6d;&#x70;&#x61;&#x73;&#x73;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-gruntfront' : '&#x67;&#x72;&#x75;&#x6e;&#x74;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-gruntback' : '&#x67;&#x72;&#x75;&#x6e;&#x74;&#x62;&#x61;&#x63;&#x6b;',
			'icon-grunt' : '&#x67;&#x72;&#x75;&#x6e;&#x74;',
			'icon-sublimefront' : '&#x73;&#x75;&#x62;&#x6c;&#x69;&#x6d;&#x65;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-sublimeback' : '&#x73;&#x75;&#x62;&#x6c;&#x69;&#x6d;&#x65;&#x62;&#x61;&#x63;&#x6b;',
			'icon-sublime' : '&#x73;&#x75;&#x62;&#x6c;&#x69;&#x6d;&#x65;',
			'icon-rubyfront' : '&#x72;&#x75;&#x62;&#x79;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-rubyback' : '&#x72;&#x75;&#x62;&#x79;&#x62;&#x61;&#x63;&#x6b;',
			'icon-ruby' : '&#x72;&#x75;&#x62;&#x79;',
			'icon-requirefront' : '&#x72;&#x65;&#x71;&#x75;&#x69;&#x72;&#x65;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-requireback' : '&#x72;&#x65;&#x71;&#x75;&#x69;&#x72;&#x65;&#x62;&#x61;&#x63;&#x6b;',
			'icon-require' : '&#x72;&#x65;&#x71;&#x75;&#x69;&#x72;&#x65;',
			'icon-nodefront' : '&#x6e;&#x6f;&#x64;&#x65;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-node' : '&#x6e;&#x6f;&#x64;&#x65;',
			'icon-jsback' : '&#x6a;&#x73;&#x62;&#x61;&#x63;&#x6b;',
			'icon-js' : '&#x6a;&#x73;',
			'icon-html5front' : '&#x68;&#x74;&#x6d;&#x6c;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-html5back' : '&#x68;&#x74;&#x6d;&#x6c;&#x62;&#x61;&#x63;&#x6b;',
			'icon-html5' : '&#x68;&#x74;&#x6d;&#x6c;',
			'icon-finderfront' : '&#x66;&#x69;&#x6e;&#x64;&#x65;&#x72;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-finderback' : '&#x66;&#x69;&#x6e;&#x64;&#x65;&#x72;&#x62;&#x61;&#x63;&#x6b;',
			'icon-finder' : '&#x66;&#x69;&#x6e;&#x64;&#x65;&#x72;',
			'icon-dribbblefront' : '&#x64;&#x72;&#x69;&#x62;&#x62;&#x62;&#x6c;&#x65;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-dribbbleback' : '&#x64;&#x72;&#x69;&#x62;&#x62;&#x62;&#x6c;&#x65;&#x62;&#x61;&#x63;&#x6b;',
			'icon-dribbble' : '&#x64;&#x72;&#x69;&#x62;&#x62;&#x62;&#x6c;&#x65;',
			'icon-css3front' : '&#x63;&#x73;&#x73;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-css3back' : '&#x63;&#x73;&#x73;&#x62;&#x61;&#x63;&#x6b;',
			'icon-css3' : '&#x63;&#x73;&#x73;',
			'icon-beerjsfront' : '&#x62;&#x65;&#x65;&#x72;&#x6a;&#x73;&#x66;&#x72;&#x6f;&#x6e;&#x74;',
			'icon-beerjsback' : '&#x62;&#x65;&#x65;&#x72;&#x6a;&#x73;&#x62;&#x61;&#x63;&#x6b;',
			'icon-beerjs' : '&#x62;&#x65;&#x65;&#x72;&#x6a;&#x73;',
			'icon-angularfront' : '&#x61;&#x6e;&#x67;&#x75;&#x6c;&#x61;&#x72;',
			'icon-angularback' : '&#x61;&#x6e;&#x67;&#x75;&#x6c;&#x61;&#x72;&#x62;&#x61;&#x63;&#x6b;',
			'icon-angular' : '&#x61;&#x6e;&#x67;&#x75;&#x6c;&#x61;&#x72;&#x66;&#x72;&#x6f;&#x6e;&#x74;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};