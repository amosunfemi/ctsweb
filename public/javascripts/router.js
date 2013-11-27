/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 8/5/13
 * Time: 7:40 PM
 * To change this template use File | Settings | File Templates.
 */


CTSApp.Router.map(function () {
    this.resource('/');
});

CTSApp.SummaryItemRoute = Ember.Route.extend({
    model: function () {
        return CTSApp.SummaryItem.find();
    }
});