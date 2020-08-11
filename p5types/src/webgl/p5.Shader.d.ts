// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Shader {
        // TODO: Fix p5.Shader() errors in src/webgl/p5.Shader.js, line 11:
        //
        //    param "renderer" has invalid type: p5.RendererGL
        //
        // constructor(renderer: RendererGL, vertSrc: string, fragSrc: string);

        /**
         *   Wrapper around gl.uniform functions. As we store
         *   uniform info in the shader we can use that to do
         *   type checking on the supplied data and call the
         *   appropriate function.
         *   @param uniformName the name of the uniform in the
         *   shader program
         *   @param data the data to be associated with that
         *   uniform; type varies (could be a single numerical
         *   value, array, matrix, or texture / sampler
         *   reference)
         *   @chainable
         */
        setUniform(uniformName: string, data: object | number | boolean | number[]): Shader;
    }
}
