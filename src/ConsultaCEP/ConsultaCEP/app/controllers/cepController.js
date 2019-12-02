app.controller('cepController', function($scope,$http) {
    $scope.consultacep = function (cepdigitado) {
        $http({
            method: 'get',
            url: 'https://viacep.com.br/ws/' + cepdigitado + '/json/'
        }).then(function (response) {
            $scope.resultado = [response.data];
        }, function (error) {
            console.log(error, 'deu erro');
        });
    };
});