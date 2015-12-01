# tealium-tools

## Tealium Tools and Hosting

This repo hosts Tealium Tools built by Ty Gavin.  There is an example "Hello World" Tealium Tool that shows how to build your own and share with others using the "rawgit.com" CDN location.

The rawgit.com location is a free service available for hosting files on a CDN for low volume usage.

[The rawgit.com FAQ](https://rawgit.com/faq)

NOTE: The rawgit.com hosting service is a free service and is not a part of Tealium or GitHub.  It my testing, it works well for hosting Tealium Tools.


## Getting Started

As easy as 1..2..3..4

1. Add a new github repo (a good name is "tealium-tools") and make it public

2. Add a directory in the repo and create the .json, .js, and .html file for your Tealium Tool

3. Tag a release snapshot and make sure the path in your .json file has the release tag included

4. Share your Tealium Tool .json link in the Tealium Community or with your mom to beta test


## Example

"Hello World" Tealium Tool Source Code

[github.com/tygavin/tealium-tools](https://github.com/tygavin/tealium-tools)

Tealium Tool v1.0 JSON
 
[https://cdn.rawgit.com/tygavin/tealium-tools/v1.0/hello-world/hello-world.json](https://cdn.rawgit.com/tygavin/tealium-tools/v1.0/hello-world/hello-world.json)


## Installing Tealium Tools

The Tealium Tools Chrome Extension can be installed from the Chrome Web Store

[Get Tealium Tool Chrome Extension](https://chrome.google.com/webstore/detail/tealium-tools/gidnphnamcemailggkemcgclnjeeokaa?hl=en-US)

Once installed you can add new tools to your set of Custom Tools

1. Launch the Tealium Tools Chrome Extension

2. Click on "Custom Tools" and the large "+" plus sign to add a new Tealium Tool

3. Paste in the full path to the Tealium Tools JSON (for example: https://cdn.rawgit.com/tygavin/tealium-tools/v1.0/hello-world/hello-world.json)

4. Your Tealium Tool is now available for use


## Tips

For testing, use the "rawgit.com" location (instead of "cdn.rawgit.com" location) and push your changes to a "dev" branch.

Do not share this with your users.  This is for testing your dev work only.  This allows you to immediately test your changes before build a release tag location that is released to the general public.

Copy/paste the following directly when adding as a new Custom Tealium Tool

`
{
    "id" : "hello_world_hosted_on_github_dev",
    "title": "DEV - Hello World Sample",
    "description": "This Tealium tool shows how to host tools on github (cdn.rawgit.com)",
    "icon_url" : "",
    "scripts": {
        "import" : {
            "button_label": "Init",
            "template": "https://rawgit.com/tygavin/tealium-tools/dev/hello-world/hello-world.html",
            "js": "https://rawgit.com/tygavin/tealium-tools/dev/hello-world/hello-world.js",
            "remote_js": true,
            "remote_template": true
        }
    }
}
`
