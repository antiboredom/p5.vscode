// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Loads a custom shader from the provided vertex and
         *   fragment shader paths. The shader files are loaded
         *   asynchronously in the background, so this method
         *   should be used in preload(). For now, there are
         *   three main types of shaders. p5 will automatically
         *   supply appropriate vertices, normals, colors, and
         *   lighting attributes if the parameters defined in
         *   the shader match the names.
         *   @param vertFilename path to file containing vertex
         *   shader source code
         *   @param fragFilename path to file containing
         *   fragment shader source code
         *   @param [callback] callback to be executed after
         *   loadShader completes. On success, the Shader
         *   object is passed as the first argument.
         *   @param [errorCallback] callback to be executed
         *   when an error occurs inside loadShader. On error,
         *   the error is passed as the first argument.
         *   @return a shader object created from the provided
         *   vertex and fragment shader files.
         */
        loadShader(
            vertFilename: string,
            fragFilename: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Shader;
        createShader(vertSrc: string, fragSrc: string): Shader;

        /**
         *   The shader() function lets the user provide a
         *   custom shader to fill in shapes in WEBGL mode.
         *   Users can create their own shaders by loading
         *   vertex and fragment shaders with loadShader().
         *   @param [s] the desired p5.Shader to use for
         *   rendering shapes.
         *   @chainable
         */
        shader(s?: Shader): p5;

        /**
         *   This function restores the default shaders in
         *   WEBGL mode. Code that runs after resetShader()
         *   will not be affected by previously defined
         *   shaders. Should be run after shader().
         *   @chainable
         */
        resetShader(): p5;

        /**
         *   Normal material for geometry is a material that is
         *   not affected by light. It is not reflective and is
         *   a placeholder material often used for debugging.
         *   Surfaces facing the X-axis, become red, those
         *   facing the Y-axis, become green and those facing
         *   the Z-axis, become blue. You can view all possible
         *   materials in this example.
         *   @chainable
         */
        normalMaterial(): p5;

        /**
         *   Texture for geometry. You can view other possible
         *   materials in this example.
         *   @param tex 2-dimensional graphics to render as
         *   texture
         *   @chainable
         */
        texture(tex: Image | MediaElement | Graphics): p5;

        /**
         *   Sets the coordinate space for texture mapping. The
         *   default mode is IMAGE which refers to the actual
         *   coordinates of the image. NORMAL refers to a
         *   normalized space of values ranging from 0 to 1.
         *   This function only works in WEBGL mode. With
         *   IMAGE, if an image is 100 x 200 pixels, mapping
         *   the image onto the entire size of a quad would
         *   require the points (0,0) (100, 0) (100,200)
         *   (0,200). The same mapping in NORMAL is (0,0) (1,0)
         *   (1,1) (0,1).
         *   @param mode either IMAGE or NORMAL
         */
        textureMode(mode: TEXTURE_MODE): void;

        /**
         *   Sets the global texture wrapping mode. This
         *   controls how textures behave when their uv's go
         *   outside of the 0 - 1 range. There are three
         *   options: CLAMP, REPEAT, and MIRROR. CLAMP causes
         *   the pixels at the edge of the texture to extend to
         *   the bounds REPEAT causes the texture to tile
         *   repeatedly until reaching the bounds MIRROR works
         *   similarly to REPEAT but it flips the texture with
         *   every new tile
         *
         *   REPEAT & MIRROR are only available if the texture
         *   is a power of two size (128, 256, 512, 1024,
         *   etc.).
         *
         *   This method will affect all textures in your
         *   sketch until a subsequent textureWrap call is
         *   made.
         *
         *   If only one argument is provided, it will be
         *   applied to both the horizontal and vertical axes.
         *   @param wrapX either CLAMP, REPEAT, or MIRROR
         *   @param [wrapY] either CLAMP, REPEAT, or MIRROR
         */
        textureWrap(wrapX: WRAP_X, wrapY?: WRAP_Y): void;

        /**
         *   Ambient material for geometry with a given color.
         *   Ambient material defines the color the object
         *   reflects under any lighting. For example, if the
         *   ambient material of an object is pure red, but the
         *   ambient lighting only contains green, the object
         *   will not reflect any light. Here's an example
         *   containing all possible materials.
         *   @param v1 gray value, red or hue value (depending
         *   on the current color mode),
         *   @param [v2] green or saturation value
         *   @param [v3] blue or brightness value
         *   @chainable
         */
        ambientMaterial(v1: number, v2?: number, v3?: number): p5;

        /**
         *   Ambient material for geometry with a given color.
         *   Ambient material defines the color the object
         *   reflects under any lighting. For example, if the
         *   ambient material of an object is pure red, but the
         *   ambient lighting only contains green, the object
         *   will not reflect any light. Here's an example
         *   containing all possible materials.
         *   @param color color, color Array, or CSS color
         *   string
         *   @chainable
         */
        ambientMaterial(color: number[] | string | Color): p5;

        /**
         *   Sets the emissive color of the material used for
         *   geometry drawn to the screen. This is a misnomer
         *   in the sense that the material does not actually
         *   emit light that effects surrounding polygons.
         *   Instead, it gives the appearance that the object
         *   is glowing. An emissive material will display at
         *   full strength even if there is no light for it to
         *   reflect.
         *   @param v1 gray value, red or hue value (depending
         *   on the current color mode),
         *   @param [v2] green or saturation value
         *   @param [v3] blue or brightness value
         *   @param [a] opacity
         *   @chainable
         */
        emissiveMaterial(v1: number, v2?: number, v3?: number, a?: number): p5;

        /**
         *   Sets the emissive color of the material used for
         *   geometry drawn to the screen. This is a misnomer
         *   in the sense that the material does not actually
         *   emit light that effects surrounding polygons.
         *   Instead, it gives the appearance that the object
         *   is glowing. An emissive material will display at
         *   full strength even if there is no light for it to
         *   reflect.
         *   @param color color, color Array, or CSS color
         *   string
         *   @chainable
         */
        emissiveMaterial(color: number[] | string | Color): p5;

        /**
         *   Specular material for geometry with a given color.
         *   Specular material is a shiny reflective material.
         *   Like ambient material it also defines the color
         *   the object reflects under ambient lighting. For
         *   example, if the specular material of an object is
         *   pure red, but the ambient lighting only contains
         *   green, the object will not reflect any light. For
         *   all other types of light like point and
         *   directional light, a specular material will
         *   reflect the color of the light source to the
         *   viewer. Here's an example containing all possible
         *   materials.
         *   @param gray number specifying value between white
         *   and black.
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        specularMaterial(gray: number, alpha?: number): p5;

        /**
         *   Specular material for geometry with a given color.
         *   Specular material is a shiny reflective material.
         *   Like ambient material it also defines the color
         *   the object reflects under ambient lighting. For
         *   example, if the specular material of an object is
         *   pure red, but the ambient lighting only contains
         *   green, the object will not reflect any light. For
         *   all other types of light like point and
         *   directional light, a specular material will
         *   reflect the color of the light source to the
         *   viewer. Here's an example containing all possible
         *   materials.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @param [alpha] alpha value relative to current
         *   color range (default is 0-255)
         *   @chainable
         */
        specularMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Specular material for geometry with a given color.
         *   Specular material is a shiny reflective material.
         *   Like ambient material it also defines the color
         *   the object reflects under ambient lighting. For
         *   example, if the specular material of an object is
         *   pure red, but the ambient lighting only contains
         *   green, the object will not reflect any light. For
         *   all other types of light like point and
         *   directional light, a specular material will
         *   reflect the color of the light source to the
         *   viewer. Here's an example containing all possible
         *   materials.
         *   @param color color Array, or CSS color string
         *   @chainable
         */
        specularMaterial(color: number[] | string | Color): p5;

        /**
         *   Sets the amount of gloss in the surface of shapes.
         *   Used in combination with specularMaterial() in
         *   setting the material properties of shapes. The
         *   default and minimum value is 1.
         *   @param shine Degree of Shininess. Defaults to 1.
         *   @chainable
         */
        shininess(shine: number): p5;
    }
}
