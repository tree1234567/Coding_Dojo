app.factory('usersFactory', function ($http) {
    var factory = {}
    factory.users = []


    factory.makeUser = function (userObj, userExists, setCookie) {
        console.log('Factory MakeUser hit!')
        $http.post('/api/users/new', userObj).then(function (res) {
            if (res.data.success) {
                console.log('fdsaf')
                userExists(false)
                setCookie(res.data.user_id);
            }
            else {
                userExists(true)
            }

        })
    }
    factory.login = function (userObj, setLoginErrorCallback, loadHomePage, setCookie) {
        $http.post('/api/users/login', userObj).then(function (res) {
            if (!res.data.success) {
                setLoginErrorCallback(res.data.message)
            } else {
                setCookie(res.data.user_id)
                loadHomePage()
            }
        })
    }
    return factory;


})