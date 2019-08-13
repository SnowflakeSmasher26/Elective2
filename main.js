angular.module("charlCalc", []).controller("myController",
function($scope) {
    $scope.answer = "";

$scope.pushBtn=function (val){
    $scope.answer += val;
};
$scope.equal=function (val) {
    $scope.answer = eval($scope.answer)
};
$scope.clear=function(val){
    $scope.answer = ''
}
})










// function pushBtn(obj){
//     var inputLabel = document.getElementById('inputLabel');
//     var pushed = obj.innerHTML;

//     if(pushed == '='){
//         inputLabel.innerHTML = eval(inputLabel.innerHTML);
    
//     } else if(pushed == 'AC'){
//         inputLabel.innerHTML = '0';
//     }
//     else{
//         if(inputLabel.innerHTML == '0'){
//             inputLabel.innerHTML = pushed;
//         }
//         else{
//             inputLabel.innerHTML += pushed;
//         }
//     }
// }