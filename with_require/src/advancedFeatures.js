define([], function () {
    'use strict';

    class Sandbox {
	constructor() {
	    this.x = 43;
	    this.hello = this.hello.bind(this);
	}

	async hello() {
	    await Promise.resolve(true);
	    console.log('Hello ' + this.x);
	}
    }

    return Sandbox;
});
