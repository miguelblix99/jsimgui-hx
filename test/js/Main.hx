package;

import imgui.Helpers.*;
import imgui.ImGui;
import imgui.ImGuiImplWeb;
import imgui.JsRuntime;
import js.Browser;
import js.html.CanvasElement;

class Main
{

	static final sliderValue = boxFloat(0.35);
	static var canvas:CanvasElement;
	static var gl:Dynamic;
	static var framesRendered = 0;

	public static function main()
	{

		setStatus('loading');

		canvas = cast Browser.document.getElementById('render-canvas');
		if (canvas == null)
		{
			throw 'Missing #render-canvas element.';
		}

		gl = canvas.getContext('webgl2');
		if (gl == null)
		{
			gl = canvas.getContext('webgl');
		}

		JsRuntime.load('/node_modules/@mori2003/jsimgui/build/mod.js')
			.then(_ -> ImGuiImplWeb.init({
				canvas: canvas,
			}))
			.then(_ -> {
				setStatus('ready');
				Browser.window.requestAnimationFrame(render);
				return null;
			})
			.catchError(error -> {
				setStatus('error');
				Browser.document.body.setAttribute('data-error', Std.string(error));
				Browser.console.error('Failed to initialize jsimgui demo:', error);
				return null;
			});

	}

	static function render(_time:Float):Void
	{

		framesRendered++;
		Browser.document.body.setAttribute('data-frame-count', Std.string(framesRendered));
		if (framesRendered == 1)
		{
			setStatus('rendering');
		}

		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

		ImGuiImplWeb.beginRender();

		if (ImGui.begin('imgui-hx + jsimgui'))
		{
			ImGui.text('imgui-hx JS bindings are using the jsimgui runtime.');
			ImGui.sliderFloat('Slider value', sliderValue, 0.0, 1.0);
			ImGui.text('Current value: ' + Std.string(sliderValue[0]));
		}
		ImGui.end();

		ImGui.showDemoWindow();

		if (gl != null)
		{
			gl.clearColor(0.11, 0.13, 0.17, 1.0);
			gl.clear(gl.COLOR_BUFFER_BIT);
		}

		ImGuiImplWeb.endRender();
		Browser.window.requestAnimationFrame(render);

	}

	static function setStatus(status:String):Void
	{

		Browser.document.body.setAttribute('data-status', status);

	}

}
