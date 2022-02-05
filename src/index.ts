interface Window {
  GGBApplet: any;
}

var params = {
  appName: 'classic',
  width: 800,
  height: 600,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true,
};
var applet = new window.GGBApplet({ id: 'app1', ...params }, true);
var applet2 = new window.GGBApplet({ id: 'app2', ...params }, true);

window.addEventListener('load', function () {
  applet.inject('ggb-element1');
  applet2.inject('ggb-element2');
});