Drupal.behaviors.accordion = {
  attach(context) {
    // Selectors
    const items = context.querySelectorAll('.js-accordion-item');
    const controls = context.querySelectorAll('.js-accordion__controls');
    // Classes
    const itemToggle = '.js-accordion-item__toggle';
    const itemState = 'data-accordion-expanded';
    const buttonState = 'aria-expanded';

    // Function to expand an accordion item.
    const expand = (item) => {
      const toggle = item.querySelector(itemToggle);

      item.setAttribute(itemState, 'true');
      toggle.setAttribute(buttonState, 'true');
    };

    // Function to collapse an accordion item.
    const collapse = (item) => {
      const toggle = item.querySelector(itemToggle);

      item.setAttribute(itemState, 'false');
      toggle.setAttribute(buttonState, 'false');
    };

    // Hide all accordion content sections if JavaScript is enabled.
    items.forEach((item) => {
      collapse(item);
    });

    // Toggle accordion content when toggle is activated.
    items.forEach((item) => {
      const toggle = item.querySelector(itemToggle);

      toggle.addEventListener('click', () => {
        // Toggle the item's state.
        return toggle.getAttribute(buttonState) === 'true'
          ? collapse(item)
          : expand(item);
      });
    });

    controls.forEach((control) => {
      // Get all items relevant to the control.
      const allItems =
        control.parentNode.querySelectorAll('.js-accordion-item');
      // Add click listener on the parent <ul>
      control.addEventListener('click', (e) => {
        // Determine which control was activated. `action` will re turn a
        // boolean. `true` if the expand control was clicked, otherwise false.
        const action = e.target.classList.contains(
          'js-accordion__toggle-all--expand',
        );

        // Iterate over
        allItems.forEach((item) => {
          if (action === false) {
            collapse(item);
          } else {
            expand(item);
          }
        });
      });
    });
  },
};
