/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 8/6/13
 * Time: 4:30 AM
 * To change this template use File | Settings | File Templates.
 */

//Handle local persistence

CTSApp.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter' //To be removed to use DS.RESTAdapter
})
