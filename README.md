# Censor Visual Studio C*de
Are you tired of being bombarded with the phrase "Visual Studio C\*de",
in its various forms and fashions, while surfing the interwebs?

Suffer no more! The Censor VS C\*de extension protects your eyes
while you browse. Almost all occurences of VS C\*de, vsc\*de,
Visual Studio C\*de, and similar, will be replaced with a much more palatable, censored version.

Currently only available for FireFox. Other browsers on the way!
[Download Here](https://addons.mozilla.org/en-US/firefox/addon/vsc-de/)

## Limitations
There are currently some limitations to this extension in its current form.
Here they are, along with some handy, temporary workarounds.
- Not all occurences of VS C\*de are censored.
    -
    Websites that make use of the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
    cannot be fully censored. As far as I can tell, selecting elements
    inside of arbitrary shadow nodes cannot be done in a straightforward
    way. One example of this I came across was Reddit, where the text in
    the sidepanel (i.e. the subreddit title) cannot be targeted with a
    general `document.querySelectorAll()`.
    
    Workarounds: Use `old.reddit.com`, or stay away from the VS C\*de subreddit.

- Breaks Google Search Result Links
    -
    This extension only modifies text node objects, and therefore does not
    modify HTML attributes like `href`. However, Google must be doing
    something wonky with how they generate the link when you click a search
    result, leading to links containing `vsc*de` being censored, and
    subsequently broken.

    Workaround: Use a better search engine.

NOTE: Not endorsed by Visual Studio C\*de or Micros\*ft.