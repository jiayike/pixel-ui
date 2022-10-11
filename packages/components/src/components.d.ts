/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonTypes } from "./components/atoms/button/button";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PixelButton {
        /**
          * The style of type the button
         */
        "type": ButtonTypes;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPixelButtonElement extends Components.PixelButton, HTMLStencilElement {
    }
    var HTMLPixelButtonElement: {
        prototype: HTMLPixelButtonElement;
        new (): HTMLPixelButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pixel-button": HTMLPixelButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PixelButton {
        /**
          * The style of type the button
         */
        "type"?: ButtonTypes;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pixel-button": PixelButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pixel-button": LocalJSX.PixelButton & JSXBase.HTMLAttributes<HTMLPixelButtonElement>;
        }
    }
}
