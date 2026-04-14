package imguijs;

#if js
import js.lib.Promise;
import js.Syntax;

class Runtime {

	public static function load(modulePath:String):Promise<Void> {

		return cast Syntax.code('import({0}).then(function(module) { globalThis.__imguiHxJsImGui = module; })', modulePath);

	}

}
#end
