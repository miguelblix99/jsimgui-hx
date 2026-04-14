package imguijs;

import haxe.io.Bytes;
import haxe.io.BytesData;

import haxe.macro.Expr;

class Helpers {

    macro public static function boxBool(value:ExprOf<Bool>):Expr {

        return macro [ $value ];

    }

    macro public static function boxInt(value:ExprOf<Int>):Expr {

        return macro [ $value ];

    }

    macro public static function boxFloat(value:ExprOf<Float>):Expr {

        return macro [ $value ];

    }

    macro public static function boxString(value:ExprOf<String>):Expr {

        return macro [ $value ];

    }

    macro public static function fromBoolArray(value:ExprOf<Array<Bool>>):Expr {

        return macro $value;

    }

    macro public static function fromIntArray(value:ExprOf<Array<Int>>):Expr {

        return macro $value;

    }

    macro public static function fromFloatArray(value:ExprOf<Array<Float>>):Expr {

        return macro $value;

    }

    macro public static function fromStringArray(value:ExprOf<Array<String>>):Expr {

        return macro $value;

    }

    macro public static function fromBytes(value:ExprOf<Bytes>):Expr {

        return macro $value.getData();

    }

    macro public static function fromBytesData(value:ExprOf<BytesData>):Expr {

        return macro $value;

    }

}
