function showhideTab(executionContext) {
  formContext = executionContext.getFormContext();

  let fieldvalue = "";
  let tabs = { tabname: "" };

  switch (fieldvalue) {
    case "1":
      tabs = { tabname: "t6", visible: false };
      break;
    case "2":
      tabs = { tabname: "t1", visible: false };

      tabs.forEach((element) => {
        tabVisibility(element);
      });
      break;
  }

  function tabVisibility(tName, boolVisible) {
    let tabObj = formContext.ui.tabs.get(tName);
    tabObj.setVisible(boolVisible);
  }
};