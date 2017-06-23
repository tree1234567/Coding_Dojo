app.factory("appointmentsFactory", function($http){
    var factory ={}
    factory.appointments = [];

    factory.createAppointment = function(appointmentObj, user_id, redirect,setError){
        appointmentObj.user_id = user_id;
        $http.post('/api/appointments/new', appointmentObj,user_id).then(function(res){
            if (res.data.success){
                redirect()
            }else{
                setError(res.data.message)
            }
        })
    }
    factory.getAppointments = function(setAppointmentsInScope){
        $http.get('/api/appointments').then(function(res){
            factory.appointments = res.data.appointments
            setAppointmentsInScope(factory.appointments);
        })
    }
    factory.deleteAppointment = function(appointmentID, setAppointmentsInScope, appointmentDeleteErr){
        $http.post('/api/appointments/delete', appointmentID).then(function(res){
            if(res.data.success){
                factory.getAppointments(setAppointmentsInScope)
            }else{
                appointmentDeleteErr(res.data.message);
            }
        })
    }

    return factory;

})