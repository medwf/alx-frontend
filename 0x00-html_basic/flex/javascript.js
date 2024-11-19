console.log("file javascript is running");

/**
 * changeDirection: change value for flex direction in style. 
 */
function changeFlexDirection() {
  // select value from select onchange.
  const directionValue = document.getElementById('direction-value').value;

  // get element flexContainer.
  const flexContainer = document.getElementsByClassName('flex-direction')[0];

  flexContainer.style.flexDirection = directionValue;
}

function changeFlexWrap() {
  // select element flex-wrap
  const flexWrapElement = document.getElementsByClassName("flex-wrap")[0];

  // select value from select.
  const flexWrapValue = document.getElementById("flexWrap").value;

  flexWrapElement.style.flexWrap = flexWrapValue;
}

function changeFlexFlow() {
  const flexFlowElement = document.getElementsByClassName("flex-flow")[0];
  const flexFlowDirectionValue = document.getElementById("flexFlowDirection").value;
  const flexFlowWrapValue = document.getElementById("flexFlowWrap").value;

  flexFlowElement.style.flexFlow = flexFlowDirectionValue + " " + flexFlowWrapValue; 
}

/**
 * changeFlexJust : change value of justify-content
 */
function changeFlexJust() {
  const flexFlowElement = document.getElementsByClassName("flex-just")[0];
  const flexJustValue = document.getElementById("flexJust").value;

  flexFlowElement.style.justifyContent = flexJustValue;
}

function changeAlignItems() {
  const flexAlignItemsElement = document.getElementsByClassName("align-items")[0];
  const flexAlignItemsValue = document.getElementById("alignItems").value;

  // if (flexAlignItemsValue === "baseline") {
    const dv = document.getElementsByClassName("div-al-il");
    let pad = 10;
    for (const d of dv) {
      d.style.padding = (flexAlignItemsValue === "baseline") ? `${20 + pad}px`: "20px";
      pad += 10;
    }
  // }

  flexAlignItemsElement.style.alignItems = flexAlignItemsValue;
}
function changeAlignContent() {
  const flexAlignConElement = document.getElementsByClassName("align-content")[0];
  const flexAlignConValue = document.getElementById("alignContent").value;

  // if (flexAlignItemsValue === "baseline") {
    const dv = document.getElementsByClassName("div-Con-il");
    let pad = 4;
    for (const d of dv) {
      d.style.padding = (flexAlignConValue === "baseline") ? `${20 + pad}px`: "20px";
      pad += 4;
    }
  // }

  flexAlignConElement.style.alignContent = flexAlignConValue;
}
