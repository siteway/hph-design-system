'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const hphTheme = mandelbrot({
    skin: { name: 'navy' },
    nav: ['docs', 'components'],
    panels: ['html', 'view', 'context', 'info', 'notes'],
    format: 'yaml',
});

fractal.set('project.title', 'HPH Design System');
fractal.set('project.version', '1.0.0');
fractal.set('project.author', 'Homepage Helden GmbH');

fractal.web.theme(hphTheme);
fractal.web.set('builder.dest', __dirname + '/build');
fractal.web.set('static.path', __dirname + '/src/assets');

fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', 'ready');
fractal.components.set('statuses', {
    prototype: { label: 'Prototype', description: 'Do not use in production.', color: '#FF3333' },
    wip:       { label: 'WIP',       description: 'Work in progress.',         color: '#FF9233' },
    ready:     { label: 'Ready',     description: 'Ready to use.',             color: '#29CC29' },
});

fractal.docs.set('path', __dirname + '/src/docs');
