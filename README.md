# SweetDarkFox
Firefox CSS, based on Sweet Dark GTK theme's colors

![PitchDarkFox](https://github.com/AlbusPercivalDumbledore/SweetDarkFox/blob/main/Screenshot%20from%202022-08-23%2022-49-29.png)

![AboutFirefox](https://github.com/AlbusPercivalDumbledore/SweetDarkFox/blob/main/Screenshot%20from%202022-08-23%2022-55-51.png)

## Script, Resources, Utils Folders are from: https://github.com/aminomancer/uc.css.js

### REQUIREMENTS

1. Fira Sans Font https://github.com/mozilla/Fira/releases/
2. Scripts - From [**u/MotherStylus's repository**](https://github.com/aminomancer/uc.css.js)
3. Resources Folder and chrome.manifest from [**u/MotherStylus's repository**](https://github.com/aminomancer/uc.css.js)

### SCRIPTS REQUIRED

1. [**Agent/Author Sheet Loader**](https://github.com/aminomancer/uc.css.js/blob/master/script/userChrome_as_css_module.uc.js) - for styling tooltips
2. [**Toolbox Button**](https://github.com/aminomancer/uc.css.js/blob/master/script/atoolboxButton.uc.js) - as 'Inspect Element', and Hamburger Menu are hidden
3. [**Search Selection Keyboard Shortcut**](https://github.com/aminomancer/uc.css.js/blob/master/script/searchSelectionShortcut.uc.js) - as 'Search _InsertSearchEngineName_ with' is hidden from context menu

## STYLING ADDONS

1. Themes for Addons are contained in 'userContent -> Addons' folder.
2. Internal UUID of Addons is required. It can be found at 'This Firefox' section of 'about:debugging'. It needs to be pasted in addon's stylesheet, in place of 'Paste Internal UUID here'.
3. Rules from TreeStyleTabs-TextArea.css (inside userContent -> Addons folder) need to be pasted in text area provided by TreeStyleTabs Addon in about:preferences. Choose 'No Decoration' under Appearance -> Themes in Tree Style Tabs Settings

### STYLED ADDONS

[**Auto Tab Discard**](https://addons.mozilla.org/en-US/firefox/addon/auto-tab-discard/), [**Bitwarden Password Manager**](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/), [**Block Site**](https://addons.mozilla.org/en-US/firefox/addon/block-website/), [**Breadcrumbs**](https://addons.mozilla.org/en-US/firefox/addon/breadcrumbus/), [**Bypass Paywalls**](https://addons.mozilla.org/en-US/firefox/addon/bypass-paywalls-firefox/), [**Bypass Paywalls Clean**](https://addons.mozilla.org/en-US/firefox/addon/bypass-paywalls-clean/), [**Clear URLs**](https://addons.mozilla.org/en-US/firefox/addon/clearurls/), [**Cookie Auto Delete**](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/), [**Dark Reader**](https://addons.mozilla.org/en-US/firefox/addon/darkreader/), [**Enhancer for Youtube**](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/), [**EPUB Reader**](https://addons.mozilla.org/en-US/firefox/addon/epubreader/), [**Fast Tab Switcher**](https://addons.mozilla.org/en-US/firefox/addon/fast-tab-switcher/), [**FeedBro**](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader/), [**Firefox Relay**](https://addons.mozilla.org/en-US/firefox/addon/private-relay/), [**Google Container**](https://addons.mozilla.org/en-US/firefox/addon/google-container/), [**Imagus**](https://addons.mozilla.org/en-US/firefox/addon/imagus/), [**Local CDN**](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/), [**Multi Account Container**](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/), [**Notes By Firefox**](https://addons.mozilla.org/en-US/firefox/addon/notes-by-firefox/), [**Save WebP as PNG**](https://addons.mozilla.org/en-US/firefox/addon/save-webp-as-png-or-jpeg/), [**Search By Image**](https://addons.mozilla.org/en-US/firefox/addon/search_by_image/), [**Tabs Aside**](https://addons.mozilla.org/en-GB/firefox/addon/tabs-aside/), [**Set Tabs Aside (Edge Legacy)**](https://addons.mozilla.org/en-US/firefox/addon/ms-edge-tabs-aside/), [**Sponsor Block**](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/), [**Stylus**](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [**Temporary Container**](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/), [**Translate Webpages**](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/), [**Tree Style Tabs**](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/), [**uBlacklist**](https://addons.mozilla.org/en-US/firefox/addon/ublacklist/), [**uBlock Origin**](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [**uMatrix**](https://github.com/gorhill/uMatrix/releases) (Latest Pre-Release Version), [**User Agent Switcher**](https://addons.mozilla.org/en-US/firefox/addon/uaswitcher/), [**Web Archives**](https://addons.mozilla.org/en-US/firefox/addon/view-page-archive/)

## CREDITS

1. [**MrOtherGuy's firefox-csshacks**](https://github.com/MrOtherGuy/firefox-csshacks) - His stylesheets for One-Liner, about:addons column view, multi-row urlbar dropdown results, vertical bookmarks bar, autohiding sidebar, overlay menubar, findbar on top, autohiding page action buttons - form the core of my stylesheets.
2. [**u/MotherStylus**](https://github.com/aminomancer/uc.css.js) helped with styling problematic elements, pointed out glaring errors, introduced me to VS Code/Prettier, and created some very useful scripts on my request. Needless to say, these stylesheets would have been nowhere near their current state without his help.
3. [**Izheil's Quantum Nox**](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme/) - Their themes for uMatrix, uBlock Origin, and Containers helped me style these addons.
4. [**u/dilfool2nice's Stylesheets**](https://github.com/GrosBourrin/FIREFOX-BLUE-MOON/) helped style ctrl+tab preview, inspired use of GIFs.
5. [**PROxZIMA's Sweet_Pop**](https://github.com/PROxZIMA/Firefox-Theme/) - code snippet for gradient line below Navigator Toolbox.
