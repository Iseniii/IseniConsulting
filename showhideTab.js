function showhideTab(executionContext) {
  var formContext = executionContext.getFormContext(); // get formContext
  var fieldbranch = "nxt_type";

  // use formContext instead of Xrm.Page
  var branch = formContext.getAttribute(fieldbranch).getText();

  var tab1 = "timeline";
  var tab2 = "agreement";

  switch (branch) {
    case "Anlæg":
      tabVisibility(tab1, true);
      tabVisibility(tab2, false);
      break;
    case "Byudstyr":
      tabVisibility(tab1, true);
      tabVisibility(tab2, false);
      break;
    default:
      tabVisibility(tab1, true);
      tabVisibility(tab2, true);
  }

  function tabVisibility(tab, boolVisible) {
    formContext.ui.tabs.get(tabName).setVisible(boolVisible);
  }
}
