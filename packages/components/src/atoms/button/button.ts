import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import buttonStyle from "@pixel-ui/styles/src/atoms/_button.scss?inline";
import reset from "@pixel-ui/styles/src/base/_reset.scss?inline";
import animations from "@pixel-ui/styles/src/base/_animations.scss?inline";

type ButtonTypes = "primary" | "secondary";
type AnimationTypes = "slide-in";
type AnimationDelayTypes = "1" | "2" | "3" | "4";

/**
 * Button Component.
 *
 * @slot - This element has a slot
 */
@customElement("pixel-button")
export class PixelButton extends LitElement {
  static styles = [
    unsafeCSS(reset),
    unsafeCSS(animations),
    unsafeCSS(buttonStyle),
  ];

  /**
   * Button style type.
   */
  @property()
  type: ButtonTypes = "primary";

  /**
   * Button animation type.
   */
  @property()
  animationType?: AnimationTypes;

  /**
   * Button animation delay.
   */
  @property()
  animationDelay?: AnimationDelayTypes;

  private onClick = () => {
    const event = new CustomEvent("onClick", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  };

  private getAnimationClasses = (): string => {
    const classes = [];
    if (this.animationType) {
      classes.push(`animate__${this.animationType}`);
    }

    if (this.animationDelay) {
      classes.push(`animate__delay-${this.animationDelay}`);
    }

    return classes.join(" ");
  };

  render() {
    return html`
      <button
        class="pixel-button pixel-button__${this
          .type} ${this.getAnimationClasses()}"
        @click=${this.onClick}
      >
        <slot />
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pixel-button": PixelButton;
  }
}
