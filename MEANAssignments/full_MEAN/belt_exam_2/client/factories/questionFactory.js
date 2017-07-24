app.factory('questionFactory', function ($http) {

    var factory = {};
    factory.questions = []
    factory.results = []
    factory.howYouDid = null;



    factory.makeNewQuestion = function (questionObj, redirect, makeErrors) {
        $http.post('/api/makeQuestion', questionObj).then(function (res) {
            if (res.data.success) {
                factory.howYouDid = res.data.score
                redirect()
            } else {
                makeErrors(res.data.message)
            }

        })

    }
    factory.getQuestions = function (getQuestions) {
        $http.get('/api/get_questions').then(function (res) {
            console.log(res.data);
            if (res.data.success) {
                factory.questions = res.data.questions
                getQuestions(factory.questions);
            }
        })
    }

    factory.makeResult = function(resultsObj, redirect){
        $http.post('/api/make_result', resultsObj).then(function(res){
            if(res.data.success){
                factory.howYouDid = "Your Score last game was:" + res.data.score + "out of 3"
                redirect();
            }
        })
    }
    factory.getResults = function(setResults){
        $http.get('/api/get_results').then(function(res){
            factory.results = res.data.results
            console.log(factory.results)
            setResults(factory.results);
        })
    }

    return factory

})