function skillsMembers() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/members/members.html',
    controller: 'MembersController',
    controllerAs: 'vm',
    bindToController: true
  };
}