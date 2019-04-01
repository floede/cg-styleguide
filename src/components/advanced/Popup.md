Popup:

```js
const { mockClick } = require("../../../styleguide/scripts.js");

<div class="presentationWrapper">
  <Popup
    image="/screenshot.jpg"
    header="Detention block A"
    text="Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. "
    onClick={e => mockClick()}
  />
</div>;
```
