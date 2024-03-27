export default {
    title: "Hero Images",
    name: "heroimages",
    type: "document",
    fields: [
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string'
                }
            ]
        }
    ]
}