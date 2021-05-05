[![release](https://badgen.net/npm/v/react-overlay-component)](https://www.npmjs.com/package/react-overlay-component)
[![open-issues](https://badgen.net/github/open-issues/binodswain/react-overlay-component)](https://github.com/binodswain/react-overlay-component/issues)
[![Test Status](https://github.com/binodswain/react-overlay-component/workflows/Test/badge.svg)](https://github.com/binodswain/react-overlay-component/actions?query=workflow%3ATest)
[![Build Status](https://github.com/binodswain/react-overlay-component/workflows/Build/badge.svg)](https://github.com/binodswain/react-overlay-component/actions?query=workflow%3ABuild)
[![license](https://badgen.net/github/license/binodswain/react-overlay-component)](https://github.com/binodswain/react-overlay-component/blob/master/LICENSE)

# react-overlay-component

renders an overlay/modal.

## Install

```bash
npm install --save react-overlay-component
```

## Usage

```jsx
import React, { useState } from "react";
import Overlay from "react-overlay-component";

function App() {
    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        // top: `5em`,
        // clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
    };

    return (
        <div>
            <button
                className="primary"
                onClick={() => {
                    setOverlay(true);
                }}
            >
                open modal
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <h2>Sample header</h2>
                <p>text content</p>

                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    close modal
                </button>
            </Overlay>
        </div>
    );
}
```

## Demo

View demos: https://binodswain.github.io/react-overlay-component/

or

```bash
git clone git@github.com:binodswain/react-overlay-component.git
cd react-overlay-component

# build the package
npm install
npm build

# run example
cd example
npm install
npm start
```

## Props

react-overlay-component requires `isOpen`, `configs`(optional), `closeOverlay`(optional) as props.

| prop         | type     | optional | description                                 |
| ------------ | -------- | -------- | ------------------------------------------- |
| isOpen       | boolean  | false    | flag to toggle the overlay                  |
| configs      | object   | true     | config object to customize overlay behavior |
| closeOverlay | function | true     | function that sets isOpen to false          |

### configs

```js
const configs = {
    animate: true,
    top: `5em`,
    clickDismiss: false,
    escapeDismiss: false,
    focusOutline: true,
    contentClass: "container overlay-content",
};
```

| key           | type    | optional | default val | description                                       |
| ------------- | ------- | -------- | ----------- | ------------------------------------------------- |
| animate       | boolean | true     | true        | toggles overlay animation                         |
| top           | string  | true     | 0           | top value for overlay                             |
| clickDismiss  | boolean | true     | true        | enables to close the overlay on clicking backdrop |
| escapeDismiss | boolean | true     | true        | enables to close the overlay on pressing ESC key  |
| focusOutline  | boolean | true     | false       | addes an outline around the overlay-content div   |
| contentClass  | string  | true     | ''          | additional class to add in overlay-content div    |

## License

MIT © [binodswain](https://github.com/binodswain)
