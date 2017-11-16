# reveldigital-gadgets
Gadgets provide dynamic content for RevelDigital templates and utilize the Google Gadget API: https://developers.google.com/gadgets


## Creating your own gadget

It's easy to create your own gadget which can then be incorporated into your digital signage. We recommend using your own Github account for not only versioning your gadget code, but also for hosting the gadget itself. The gadget is nothing more than an XML file which defines the properties of your gadget, along with the HTML and Javascript responsible for the gadget content. This XML file must be hosted and accessible online for which Github is a great option.

We also recommend using our [Yeoman generator](https://github.com/RevelDigital/generator-reveldigital-gadget) which creates a boilerplate template for your gadget. If have Yeoman installed you can get the generator like so:

```bash
npm install -g generator-reveldigital-gadget
```

Then generate your new gadget:

```bash
yo reveldigital-gadget
```

## Adding your gadget to a template

Once your gadget has been created and pushed to your Github account you are ready to add it to a template. Add a new Gadget zone to any of your Revel Digital templates then assign the URL of your gadget to the Source property of the zone as shown here:

![Alt text](images/gadget-props.png?raw=true "Gadget Properties")

Your gadget description and properties should fill in once the gadget has been loaded. Now just assign any of the gadget properies and hit preview to check it out!
