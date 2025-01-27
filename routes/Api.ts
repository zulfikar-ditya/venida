/**
 * Venida Platform
 * Free Open Source Software
 * SEJE - Digital
 */

namespace Routes {

    module.exports = () => {

        return [

            /**
             * Route group prefix
             */
             {
                prefix: '/home',
                version: 'v1',
                routes: [
                    {
                        method: 'get',
                        controller: 'App.Http.Controllers.Api.V1.HomeController',
                        fn: 'index',
                        path: '/home',
                        alias: '/home',
                        query: '',
                        requestAuth: 0
                    }
                ]
            },
            {
                prefix: '/user',
                version: 'v1',
                routes: [
                    {
                        method: 'get',
                        controller: 'App.Http.Controllers.Api.V1.UserController',
                        fn: 'index',
                        path: '/user',
                        alias: '/user',
                        query: '',
                        requestAuth: 0
                    },
                    {
                        method: 'get',
                        controller: 'App.Http.Controllers.Api.V1.UserController',
                        fn: 'createNewUser',
                        path: '/user/createNewUser',
                        alias: '/user/createNewUser',
                        query: '/:id',
                        requestAuth: 0
                    }
                ]
            }
        ];
    }
}