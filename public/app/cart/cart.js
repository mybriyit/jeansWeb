(function (app) {
    
    app.component("cartComponent",{
        templateUrl:"app/cart/cart.html",
        controllerAs:"vm",
        controller:["cartService","$scope",function (cartService,$scope) {
            var vm = this;
            vm.total = cartService.getTotal();

            $scope.$on("addProduct",function () {
                vm.total = cartService.getTotal();
            });
            
            $scope.$on("deletePurchase",function () {
                vm.total = 0;
            });
            
            $scope.$on("removeProduct",function () {
                vm.total = cartService.getTotal();
            });
        }]
    })
    
}(angular.module("app")));