/*
This function is used to show and hide tabs and sections based on the value of a nxt_type field
*/
function showhideTabSectionsCustomerAssets(executionContext) {
  var formContext = executionContext.getFormContext(); // get formContext

  // choice field name that will determent what will be visible
  var choiceField = "nxt_type";

  // get choice fields text name
  var nameChoiceField = formContext.getAttribute(choiceField).getText();

  // save tab names in variables
  var tabSummary = "summary";
  var tabTimeline = "timeline";
  var tabAgreement = "agreement";

  // save section names in variables 
  var secMasterSubGrid = { tab: tabSummary, section: "tab_summary_sec_MasterSubgrid" };  //default Hide
  var secParentSubGrid = { tab: tabSummary, section: "tab_summary_sec_ParentSubgrid" };  //default Visible

  //What should be visible based on field text value
  switch (nameChoiceField) {
    case "Anlæg":
      sectionVisibility(secMasterSubGrid.tab, secMasterSubGrid.section, true);
      break;
    case "Byudstyr":
      tabVisibility(tabTimeline, false);
      break;
    default:
      tabVisibility(tabTimeline, false);  
    
  }

  //Function that shows/hides tabs
  function tabVisibility(tab, boolVisible) {
    formContext.ui.tabs.get(tab).setVisible(boolVisible);
  }

  //Function that shows/hides sections
  function sectionVisibility(tab, sec, boolVisible) {
    formContext.ui.tabs.get(tab).sections.get(sec).setVisible(boolVisible);
  }
}



/*
This function is used to show and hide tabs and sections based on the value of a nxt_type field
*/
function showhideTabSectionsAccount(executionContext) {
  var formContext = executionContext.getFormContext(); // get formContext

  // choice field name that will determent what will be visible
  var choiceField = "nxt_type";

  // get choice fields text name
  var nameChoiceField = formContext.getAttribute(choiceField).getText();

  // save tab names in variables
  var tabSummary = "summary";
  var tabTimeline = "timeline";
  var tabAgreement = "agreement";

  // save section names in variables 
  var secMasterSubGrid = { tab: tabSummary, section: "tab_summary_sec_MasterSubgrid" };  //default Hide
  var secParentSubGrid = { tab: tabSummary, section: "tab_summary_sec_ParentSubgrid" };  //default Visible

  //What should be visible based on field text value
  switch (nameChoiceField) {
    case "Anlæg":
      sectionVisibility(secMasterSubGrid.tab, secMasterSubGrid.section, true);
      break;
    case "Byudstyr":
      tabVisibility(tabTimeline, false);
      break;
    default:
      tabVisibility(tabTimeline, false);  
    
  }

  //Function that shows/hides tabs
  function tabVisibility(tab, boolVisible) {
    formContext.ui.tabs.get(tab).setVisible(boolVisible);
  }

  //Function that shows/hides sections
  function sectionVisibility(tab, sec, boolVisible) {
    formContext.ui.tabs.get(tab).sections.get(sec).setVisible(boolVisible);
  }
}
