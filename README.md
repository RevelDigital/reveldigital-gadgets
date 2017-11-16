# reveldigital-gadgets
Gadgets provide dynamic content for RevelDigital templates and utilize the Google Gadget API: https://developers.google.com/gadgets

## Getting started

It's easy to create your own gadget which can then be incorporated into your digital signage. We recommend using your own Github account for not only versioning your gadget code, but also for hosting the gadget itself. The gadget is nothing more than an XML file which defines the properties of your gadget, along with the HTML and Javascript responsible for the gadget content. This XML file must be hosted and accessible online for which Github is a great option.

We also recommend using our [Yeoman generator](https://github.com/RevelDigital/generator-reveldigital-gadget) which creates a boilerplate template for your gadget. If have Yeoman installed you can get the generator like so:

```bash
npm install -g generator-reveldigital-gadget
```

Then generate your new gadget:

```bash
yo reveldigital-gadget
```
