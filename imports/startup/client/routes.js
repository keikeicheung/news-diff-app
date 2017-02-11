import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/news-diffs-page.js';

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'app_rootRedirector' });
    }
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    }
};

BlazeLayout.setRoot('body');
