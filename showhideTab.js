/*
This function is used to show and hide tabs and sections based on the value of a choice field
*/
function showhideTabSections(executionContext) {
  var formContext = executionContext.getFormContext(); // get formContext
  var choiceField = "nxt_type"; // Choice field name that will determent what will be visible

  // get choice fields text name
  var nameChoiceField = formContext.getAttribute(choiceField).getText();

  // save tab names in variables
  var tab1 = "timeline";
  var tab2 = "agreement";

  // save section names in variables
  var sec1 = { tab: tab1, section: "s1" };

  //What should be visible based on field text value
  switch (nameChoiceField) {
    case "Anlæg":
      tabVisibility(tab1, true);
      tabVisibility(tab2, false);
      sectionVisibility(sec1.tab, sec1.section, false);
      break;
    case "Byudstyr":
      tabVisibility(tab1, true);
      tabVisibility(tab2, false);
      break;
    default:
      tabVisibility(tab1, true);
      tabVisibility(tab2, true);
  }

  //Function that shows/hides tabs
  function tabVisibility(tab, boolVisible) {
    formContext.ui.tabs.get(tab).setVisible(boolVisible);
  }

  //Function that shows/hides sections
  function sectionVisibility(tab, sec, boolVisible) {
    formContext.ui.tabs.get(tab).sections.get(sec);
  }
}
