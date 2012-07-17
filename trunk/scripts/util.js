function reportError(errString) {
  if(!window.__error) window.__error = {};
  if( !window.__error[errString] ) {
    // Suppress multiple
    window.__error[errString] = true;
    alert(errString);
  }
};
function getModuleBase() {
  if( window.__moduleBase ) return window.__moduleBase;
  if( _args ) {
    var moduleBase=_args()['url'];
    moduleBase=moduleBase.substring(0,moduleBase.lastIndexOf('/')+1);
    window.__moduleBase = moduleBase;
    return window.__moduleBase;
  };
  reportError('Can not find module base. Gadget may not work properly.');
  return '';
};
function rebaseRelativeUrl(relativeUrl,cached) {
  var moduleBase = getModuleBase();
  var absUrl = moduleBase+relativeUrl;
  if( cached &amp;&amp; _IG_GetCachedUrl ) {
    absUrl = _IG_GetCachedUrl(absUrl);
  };
  return absUrl;
};
function addStylesheet(cssRelativeUrl) {
  var rebasedUrl = rebaseRelativeUrl(cssRelativeUrl,true);
  document.write('<link rel="stylesheet" href="'+rebasedUrl+'">')
};
function addScript(jsRelativeUrl) {
  var rebasedUrl = rebaseRelativeUrl(jsRelativeUrl,true);
  document.write('<script src="'+rebasedUrl+'"><\/script&gt;')
};
gadgets.util.registerOnLoadHandler(
  function(){
    addScript('counter.js');
    addStylesheet('counter.css');
  }
);