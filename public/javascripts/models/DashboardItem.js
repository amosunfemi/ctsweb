/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 8/6/13
 * Time: 4:18 AM
 * To change this template use File | Settings | File Templates.
 */

//Model for Dashboard item.

CTSApp.SummaryItem = DS.Model.extend({
    title: DS.attr('string'),
    value: DS.attr('string')
})


CTSApp.MessageItem = DS.Model.extend({
    title: DS.attr('string'),
    value: DS.attr('string')
})


CTSApp.TaskItem = DS.Model.extend({
    title: DS.attr('string'),
    value: DS.attr('string')
})


CTSApp.SummaryItem.FIXTURES = [
    {
        title: 'Learn Ember.js',
        value: 'Test'
    },
    {
        title: '...',
        isCompleted: false
    },
    {
        title: 'Profit!',
        isCompleted: false
    }
];
